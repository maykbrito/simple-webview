import { Menu, BrowserWindow, ipcMain } from 'electron'
import { userPreferences } from './Store.js'
import path from 'path'
import { __dirname } from './utils.js'

function openUrlPrompt(win) {

  const promptWindow = new BrowserWindow({
    width: 400,
    height: 80,
    parent: win,
    modal: true,
    frame: true,
    resizable: false,
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false
    }
  })

  promptWindow.loadFile(path.join(__dirname, 'url-prompt.html'))

  promptWindow.webContents.on('did-finish-load', () => {
    promptWindow.webContents.send('current-url', userPreferences.get('url'))
  })

  ipcMain.once('url-submit', (event, newUrl) => {
    if (newUrl && newUrl !== userPreferences.get('url')) {
      userPreferences.set('url', newUrl)
      if (win && !win.isDestroyed()) {
        win.loadURL(newUrl) // Load URL in the main window
      }
    }
    if (promptWindow && !promptWindow.isDestroyed()) {
      promptWindow.close() // Close the prompt window
    }
  })

  // Configurar o listener para cancelamento
  ipcMain.once('url-cancel', () => {
    if (promptWindow && !promptWindow.isDestroyed()) {
      promptWindow.close() // Close the prompt window
    }
  })
}
// Export a function that sets up the menu
export function setupApplicationMenu(win) {
  // Helper function for fullscreen toggle
  function toggleFullScreen() {
    win.isSimpleFullScreen()
      ? win.setSimpleFullScreen(false)
      : win.setSimpleFullScreen(true)
  }

  const menuTemplate = [
    // Basic App menu (important on macOS)
    ...(process.platform === 'darwin' ? [{ role: 'appMenu' }] : []),
    // Edit menu (for copy/paste etc.)
    { role: 'editMenu' },
    // View menu
    {
      label: 'View',
      submenu: [
        { role: 'reload' },
        { role: 'forceReload' },
        { type: 'separator' },
        {
          label: 'Toggle Full Screen',
          accelerator: 'F11',
          click: toggleFullScreen // Use the helper function
        }
      ]
    },
    // Go menu (or could be under View/Window)
    {
      label: 'Go',
      submenu: [
        {
          label: 'Open Location...',
          accelerator: 'CommandOrControl+L',
          click: () => openUrlPrompt(win) // Call the prompt function, passing the window
        }
      ]
    },
    // Window menu
    { role: 'windowMenu' }
  ];

  const menu = Menu.buildFromTemplate(menuTemplate)
  Menu.setApplicationMenu(menu)

  // No need for globalShortcut or localShortcut registration here anymore
  // The menu accelerators handle the focus automatically.
}
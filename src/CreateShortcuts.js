import { globalShortcut, BrowserWindow, ipcMain } from 'electron'
import { userPreferences } from './Store.js'
import path from 'path'
import { __dirname } from './utils.js'

export function CreateShortcuts(win) {
  function fullScreen() {
    win.isSimpleFullScreen()
      ? win.setSimpleFullScreen(false)
      : win.setSimpleFullScreen(true)
  }

  function openUrlPrompt() {
    // Criar uma janela de prompt personalizada
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

    // Carregar o HTML do prompt
    promptWindow.loadFile(path.join(__dirname, 'url-prompt.html'))

    // Enviar a URL atual para o prompt
    promptWindow.webContents.on('did-finish-load', () => {
      promptWindow.webContents.send('current-url', userPreferences.get('url'))
    })

    // Configurar o listener para receber a nova URL
    ipcMain.once('url-submit', (event, newUrl) => {
      if (newUrl && newUrl !== userPreferences.get('url')) {
        userPreferences.set('url', newUrl)
        win.loadURL(newUrl)
      }
      promptWindow.close()
    })

    // Configurar o listener para cancelamento
    ipcMain.once('url-cancel', () => {
      promptWindow.close()
    })
  }

  globalShortcut.register('F11', fullScreen)
  globalShortcut.register('CommandOrControl+L', openUrlPrompt)
}

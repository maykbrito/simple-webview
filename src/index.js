import { app, BrowserWindow } from 'electron'
import { CreateWindow } from './CreateWindow.js'
import { setupApplicationMenu } from './CreateShortcuts.js'
import { Tray } from './Tray.js'

function App() {
  const win = CreateWindow()
  setupApplicationMenu(win)
  Tray()
}

app
  .whenReady()
  .then(App)
  .catch(err => console.error(err))

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', recreateWindow)

function recreateWindow() {
  // On macOS it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  if (BrowserWindow.getAllWindows().length === 0) {
    App()
  }
}

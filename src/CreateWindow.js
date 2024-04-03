import { BrowserWindow } from 'electron'
import { userPreferences } from './Store.js'
const store = userPreferences.store

export function CreateWindow() {
  const win = new BrowserWindow({
    width: store.browserWindow.width,
    height: store.browserWindow.height,
    transparent: store.browserWindow.transparent,
    frame: store.browserWindow.frame,
    titleBarStyle: store.browserWindow.titleBarStyle,
    alwaysOnTop: store.browserWindow.alwaysOnTop,
    webPreferences: {
      nodeIntegration: true
    }
  })

  win.loadURL(store.url)

  return win
}

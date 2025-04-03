import { Menu, Tray as ElectronTray } from 'electron'
import path from 'path'
import { userPreferences } from './Store.js'
import { __dirname } from './utils.js'

export function Tray() {
  const trayIcon = path.resolve(__dirname, '..', 'assets', 'webview-icon.png')

  const contextMenu = Menu.buildFromTemplate([
    {
      label: 'Simple Webview',
      icon: trayIcon,
      enabled: false
    },
    {
      label: 'Settings',
      click() {
        return userPreferences.openInEditor()
      }
    },
    {
      type: 'separator'
    },
    {
      type: 'normal',
      label: 'Close',
      role: 'quit',
      enabled: true
    }
  ])

  const mainTray = new ElectronTray(trayIcon)
  mainTray.setContextMenu(contextMenu)
  mainTray.on('click', () => mainTray.popUpContextMenu())
  return mainTray
}
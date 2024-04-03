import { app } from 'electron'
import Store from 'electron-store'
import chokidar from 'chokidar'

export const userPreferences = new Store({
  watch: true,
  defaults: {
    browserWindow: {
      width: 600,
      height: 400,
      transparent: false,
      frame: true,
      titleBarStyle: 'customButtonsOnHover',
      alwaysOnTop: false,
      hasShadow: false,
    },
    url: 'https://google.com'
  }
})

chokidar.watch(userPreferences.path).on('change', () => {
  app.relaunch()
  app.exit()
})
const { globalShortcut } = require('electron')

function CreateShortcuts(win) {
  function fullScreen() {
    win.isSimpleFullScreen()
      ? win.setSimpleFullScreen(false)
      : win.setSimpleFullScreen(true)
  }

  globalShortcut.register('F11', fullScreen)
}

module.exports = { CreateShortcuts }

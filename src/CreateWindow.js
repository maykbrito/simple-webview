const { BrowserWindow } = require("electron");
const { userPreferences } = require("./Store.js");
const store = userPreferences.store;

function CreateWindow() {
  win = new BrowserWindow({
    width: store.browserWindow.width,
    height: store.browserWindow.height,
    transparent: store.browserWindow.transparent,
    frame: store.browserWindow.frame,
    titleBarStyle: store.browserWindow.titleBarStyle,
    alwaysOnTop: store.browserWindow.alwaysOnTop,
    webPreferences: {
      nodeIntegration: true,
    },
  });

  win.loadURL(store.url);

  return win;
}

module.exports = { CreateWindow };

const { Tray: ElectronTray, Menu } = require("electron");
const path = require("path");
const { userPreferences } = require("./Store.js");

function Tray() {
  const trayIcon = path.resolve(__dirname, "..", "assets", "webview-icon.png");

  const contextMenu = Menu.buildFromTemplate([
    {
      label: "Simple Webview",
      icon: trayIcon,
      enabled: false,
    },
    {
      label: "Settings",
      click() {
        return userPreferences.openInEditor();
      },
    },
    {
      type: "separator",
    },
    {
      type: "normal",
      label: "Close",
      role: "quit",
      enabled: true,
    },
  ]);

  const mainTray = new ElectronTray(trayIcon);
  mainTray.setContextMenu(contextMenu);
  mainTray.on("click", () => mainTray.popUpContextMenu());
  return mainTray;
}

module.exports = { Tray };

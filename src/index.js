const { app, BrowserWindow } = require("electron");
const { CreateWindow } = require("./CreateWindow.js");
const { CreateShortcuts } = require("./CreateShortcuts.js");
const { Tray } = require("./Tray.js");
function App() {
  const win = CreateWindow();
  CreateShortcuts(win);
  Tray();
}

app
  .whenReady()
  .then(App)
  .catch((err) => console.error(err));

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") {
    app.quit();
  }
});

app.on("activate", recreateWindow);

function recreateWindow() {
  // On macOS it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  if (BrowserWindow.getAllWindows().length === 0) {
    App();
  }
}

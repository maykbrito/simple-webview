// This file refer to index.html
const electron = require('electron');
const urlExists = require('url-exists');
const currentWindow = electron.remote.getCurrentWindow()
const BrowserView = electron.remote.BrowserView


document.querySelector('#btnSearch').addEventListener('click', () => {
    url =  document.getElementById("inputURL").value;
    urlExists(url, function(err, exists) {
        if (exists) {
            // let view = new BrowserView();
            // currentWindow.setBrowserView(view);
            // view.setBounds({ x: 20, y: 430, width: 60, height: 60 });
            // view.webContents.loadFile("app/arrow-left.html");
            currentWindow.loadURL(url);
        }
    });   
});

// document.querySelector('#btnBack').addEventListener('click', () => {
//     console.log("teste");
// });



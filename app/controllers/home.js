// This file refer to index.html
const electron = require('electron');
const urlExists = require('url-exists');
const currentWindow = electron.remote.getCurrentWindow()


document.querySelector('#btnSearch').addEventListener('click', () => {
    url =  document.getElementById("inputURL").value;
    urlExists(url, function(err, exists) {
        if (exists) {
            currentWindow.loadURL(url);
        }
    });   
});



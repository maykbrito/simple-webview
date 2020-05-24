// This file refer to index.html
const currentWindow = require('electron').remote.getCurrentWindow()


document.querySelector('#btnSearch').addEventListener('click', () => {
    url =  document.getElementById("inputURL").value;
    currentWindow.loadURL(url);
})

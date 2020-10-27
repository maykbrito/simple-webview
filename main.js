const config = require('./config')

const btnStart = document.querySelector('#btn')
const url = document.querySelector('#listenUrl')

btnStart.addEventListener('click', redirect)
url.value = config.url


function redirect(){
    window.location.href = url.value
}

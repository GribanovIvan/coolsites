function add(){document.getElementById('many').innerHTML=+document.getElementById('many').innerHTML + 1}
let started = 0
let interval = null
start.onclick = function () {
    if (started == 0){
    interval = setInterval(add,1000)
    started++}
}
function stopf() {clearInterval(interval);started=0}
stop1.onclick = function(){stopf()}
reload.onclick = function() {stopf();document.getElementById('many').innerHTML=0}
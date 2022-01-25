const text = document.getElementById("ptext")
// text.innerText = 'test'
let msg=''
let num=1
enter.onclick = function() {
    msg=msg + '\n' + num + '. ' + document.getElementById("input-id").value
    num++
    text.innerText = msg
}
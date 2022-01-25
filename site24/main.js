const text = document.getElementById("ptext")
// text.innerText = 'test'
let msg=''
let num=1
enter.onclick = function() {
    msg=    msg + '<li >' + num + '. ' + document.getElementById("input-id").value + '</li>'
    num++
    document.getElementById("input-id").value=''    
    text.innerHTML = msg
}
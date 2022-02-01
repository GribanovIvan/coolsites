const text = document.getElementById("ptext")
const parent = document.getElementById("ptext")
const trash = document.getElementById("ptextt")
const audio = new Audio('nado1.opus')
const audio2 = new Audio('nado2.opus')
const audio3 = new Audio('nado3.opus')
const audio4 = new Audio('nado4.opus')
let msg=''
let num=1
enter.onclick = function() {
    msg=msg + '<li id=li' + num + '>' + document.getElementById("input-id").value + '<button onclick=del(' + num + ')>del</button></li>'
    num++
    document.getElementById("input-id").value=''    
    text.innerHTML = msg
    if ( num < 2) {
    audio.play()
    } else {if (num < 4){audio2.play()} else if (num < 7){audio3.play()}else{audio4.play()}}
}
function reverseString(str) {
    var newString = "";
    for (var i = str.length - 1; i >= 0; i--) {
        newString += str[i];
    }
    return newString;
}
function del (n) {
    let child=document.getElementById("li" + n)
    trash.appendChild(child);
    // parent.removeChild(child);
    msg=text.innerHTML
    child.innerHTML = reverseString((reverseString(child.innerHTML).substr(20))) + 'realdel(' + n + ')">realdel</button> <button onclick="add(' + n + ')">add</button>'
}
function realdel (n) {
    trash.removeChild(document.getElementById("li" + n))
}
function add (n) {
    child=document.getElementById("li" + n)
    let fakenum=num-1
    console.log (reverseString(reverseString(child.innerHTML).substr(66)) + 'del(' + fakenum + ')">del</button></li>')
    child.innerHTML = reverseString(reverseString(child.innerHTML).substr(66)) + 'del(' + fakenum + ')">del</button></li>'
    parent.appendChild(child)
}
// ffmpeg -i 13.\ Русское\ поле\ экспериментов.m4a -ss 429.5 -c opus -strict -2 -t 6.8 nado3.opus
// ffmpeg -i 13.\ Русское\ поле\ экспериментов.m4a -ss 425.9 -c opus -strict -2 -t 3.2 nado2.opus
// ffmpeg -i 13.\ Русское\ поле\ экспериментов.m4a -ss 422.7 -c opus -strict -2 -t 2.9 nado1.opus
function dredel (n){del(n)}
function arealdel(n){realdel(n)}
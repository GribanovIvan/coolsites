const text = document.getElementById("ptext")
const parent = document.getElementById("ptext")
const trash = document.getElementById("ptextt")
const audio = new Audio('nado1.opus')
const audio2 = new Audio('nado2.opus')
const audio3 = new Audio('nado3.opus')
const audio4 = new Audio('nado4.opus')
let msg=''
let num=1
let data = Array();
enter.onclick = function() {
    let temp=num // any unique variable
    document.getElementById("input-id").value = document.getElementById("input-id").value
    msg=msg + '<li id=li' + temp + '>' + document.getElementById("input-id").value + '<button onclick=del(' + temp + ')>del</button></li>'
    data[temp]=document.getElementById("input-id").value
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
    let fakenum=child.attributes.id.nodeValue.substr(2)
    trash.appendChild(child);
    // parent.removeChild(child);
    msg=text.innerHTML
    child.innerHTML=data[fakenum] + '<button onclick="realdel(' + fakenum + ')">realdel</button> <button onclick="add(' + fakenum + ')">add</button>'
}
function realdel (n) {
    trash.removeChild(document.getElementById("li" + n))
}
function add (n) {
    child=document.getElementById("li" + n)
    let fakenum=child.attributes.id.nodeValue.substr(2)
    child.innerHTML=data[fakenum] + '<button onclick="del(' + fakenum + ')">del</button></li>'
    parent.appendChild(child)
    msg = text.innerHTML
}
// ffmpeg -i 13.\ Русское\ поле\ экспериментов.m4a -ss 429.5 -c opus -strict -2 -t 6.8 nado3.opus
// ffmpeg -i 13.\ Русское\ поле\ экспериментов.m4a -ss 425.9 -c opus -strict -2 -t 3.2 nado2.opus
// ffmpeg -i 13.\ Русское\ поле\ экспериментов.m4a -ss 422.7 -c opus -strict -2 -t 2.9 nado1.opus
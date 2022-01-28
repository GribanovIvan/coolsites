const text = document.getElementById("ptext")
const parent = document.getElementById("ptext")
const trash = document.getElementById("ptextt")
let msg=''
let num=1
enter.onclick = function() {
    msg=msg + '<li id=li' + num + '>' + document.getElementById("input-id").value + '<button onclick=del(' + num + ')>del</button></li>'
    num++
    document.getElementById("input-id").value=''    
    text.innerHTML = msg
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
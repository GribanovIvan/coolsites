const body = document.getElementById("body")
body.innerHTML=body.innerHTML + '<div class=block></div>'
const block = document.querySelector(".block")
block.style.width='200px'
block.style.height='200px'
block.style.background='red'
let array = ['#FF0000', '#00FF00', '#0000FF']
let temp=0
change.onclick = function() {
    temp=temp + 1
    let x = document.getElementById("add").value
    if (!array.includes(x)) {
        array.push(x)
        temp=array.length -1
    }
    block.style.background=array[temp % array.length]
}
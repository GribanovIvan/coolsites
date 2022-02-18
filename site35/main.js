const date = new Date
const months = ['January','February','March','April','May','June','July','August','September','October','November','December']
const days = ['Sun','Mon','Tue','Web','Thu','Fri','Sat']
let mdays = [31,28,31,30,31,30,31,31,30,31,30,31]
if (date.getFullYear() % 4 == 0){mdays[1]=29}
let co=0
let month=date.getMonth()
let step = 7 - (date.getDate() - date.getDay()) % 7 //fix it
function build() {
document.getElementById('m').innerHTML=months[month]
for (let i = 1; i <= mdays[month]; i++) {
    document.getElementById("dates").childNodes[i + step].innerHTML=i
  }
document.getElementById("dates").childNodes[date.getDate() + step].style.backgroundColor='#137e57'
let prev = mdays[month-1]
console.log(prev)
if (prev == undefined){prev=31} 
for (let i = step; i >= 0 ; i--) {
    document.getElementById("dates").childNodes[i].innerHTML=(i + prev - step)
    document.getElementById("dates").childNodes[i].style.opacity=0.5
}
const newstart=step+mdays[month]+1
let zero=0
for (let i = newstart; i < 35 ; i++) {zero++
    document.getElementById("dates").childNodes[i].innerHTML=zero
    document.getElementById("dates").childNodes[i].style.opacity=0.5
  }
if (co !=0){document.getElementById('verbose').style.display='none'}else{document.getElementById('verbose').style.display='block';document.getElementById('verbose').innerHTML=days[date.getDay()] + ' ' + months[month].slice(0,3) + ' ' + date.getDate() + ' ' + date.getFullYear()}
}
left.onclick = function() {co--;build(co)}
right.onclick = function() {co++;build(co)}
build()
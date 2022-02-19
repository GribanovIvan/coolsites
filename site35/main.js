let date = new Date
const months = ['January','February','March','April','May','June','July','August','September','October','November','December']
const days = ['Sun','Mon','Tue','Web','Thu','Fri','Sat']
let mdays = [31,28,31,30,31,30,31,31,30,31,30,31]
if (date.getFullYear() % 4 == 0){mdays[1]=29}
let co=0
function build(co) {
if (co == 0){date=new Date}
let step = (7 - (date.getDate() - date.getDay())) % 7
if (step<0){step=step+7}
if (step==6){step=0}
console.log(step +'step')
console.log(date.getDate())
console.log(date.getDay())
let month=date.getMonth()
if (step + mdays[month] > 34){document.getElementById('dates').style.fontSize='7vh';document.getElementById('dates').innerHTML='<p></p><p></p><p></p><p></p><p></p><p></p><p></p><p></p><p></p><p></p><p></p><p></p><p></p><p></p><p></p><p></p><p></p><p></p><p></p><p></p><p></p><p></p><p></p><p></p><p></p><p></p><p></p><p></p><p></p><p></p><p></p><p></p><p></p><p></p><p></p><p></p><p></p><p></p><p></p><p></p><p></p><p></p>'}else{document.getElementById('dates').innerHTML='<p></p><p></p><p></p><p></p><p></p><p></p><p></p><p></p><p></p><p></p><p></p><p></p><p></p><p></p><p></p><p></p><p></p><p></p><p></p><p></p><p></p><p></p><p></p><p></p><p></p><p></p><p></p><p></p><p></p><p></p><p></p><p></p><p></p><p></p><p></p>';document.getElementById('dates').style.fontSize='8.5vh'}
document.getElementById('m').innerHTML=months[month]
for (let i = 1; i <= mdays[month]; i++) {
    document.getElementById("dates").childNodes[i + step].innerHTML=i
    document.getElementById("dates").childNodes[i + step].style.backgroundColor='unset'
    document.getElementById("dates").childNodes[i + step].style.opacity='1'
}
let prev = mdays[month-1]
if (prev == undefined){prev=31} 
for (let i = step; i >= 0 ; i--) {
    document.getElementById("dates").childNodes[i].innerHTML=(i + prev - step)
    document.getElementById("dates").childNodes[i].style.opacity=0.5
    document.getElementById("dates").childNodes[i].style.backgroundColor='unset'
  }
const newstart=step+mdays[month]+1
let zero=0
for (let i = newstart; i < document.getElementById("dates").childNodes.length ; i++) {zero++
    document.getElementById("dates").childNodes[i].innerHTML=zero
    document.getElementById("dates").childNodes[i].style.opacity=0.5
  }
if (co !== 0){document.getElementById('verbose').innerHTML=date.getFullYear()}else{document.getElementById('verbose').style.display='block';document.getElementById('verbose').innerHTML=days[date.getDay()] + ' ' + months[month].slice(0,3) + ' ' + date.getDate() + ' ' + date.getFullYear();document.getElementById("dates").childNodes[date.getDate() + step].style.backgroundColor='#137e57'}
console.log(co)
}
left.onclick = function() {date=new Date(date.getFullYear(), date.getMonth()-1, 1);co--;build(co)}
right.onclick = function() {date=new Date(date.getFullYear(), date.getMonth()+1, 1);co++;build(co)}
build(co)
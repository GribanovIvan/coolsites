for (let i = 0; i <= 10; i++ ) {
    console.log(i)
}
for (let i = 1; i <= 10; i++) {
    i++
    console.log(i)
}
task3.onclick = function() {
let n=+prompt('n?')
num=2
loop:for (let i = 2; i <= n; i++) {
for (let temp = 2; temp < i; temp++) {
if (i % temp == 0) continue loop;
}
alert(i)
}}
task1.onclick = function() {
    let a=+prompt('a?')
let b=+prompt('b?')
function min(a,b) {
    if ( a > b) {
        actual=b
    } else {
    if ( b > a) {
        actual=a
    } else{actual='error'}}
    return actual
}
alert('min=' + min(a,b))}
task2.onclick = function() {
let x=+prompt('x?')
function pow(x,n) {
    return x**n
}
alert ('x**n=' + pow(x,n))}
task4.onclick = function() {
let target= +prompt('N?')
let newr=1
let newa=+prompt('A?')
for (let tempnum = 1; tempnum <= target; tempnum++ ) {
    newr=newr+newa**tempnum
}
alert (newr)}
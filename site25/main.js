for (let i = 0; i <= 10; i++ ) {
    console.log(i)
}
for (let i = 1; i <= 10; i++) {
    i++
    console.log(i)
}
let n=+prompt('n?')
num=2
loop:for (let i = 2; i <= n; i++) {
for (let temp = 2; temp < i; temp++) {
if (i % temp == 0) continue loop;
}
console.log(i)
}
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
alert('min=' + min(a,b))
let x=+prompt('x?')
function pow(x,n) {
    return x**n
}
alert ('x**n=' + pow(x,n))
let age = +prompt('age?')
alert ( age > 14 && age < 90 )
let a = +prompt('a?')
let b = +prompt('b?')
let result
( a + b < 4 )? result = 'Мало' : result = 'Много'
alert (result)
let c = +prompt('c?')
let arr = [a, b, c];
arr.sort((a, b) => b - a);
alert( arr );
let x = +prompt('x?')
if ( x<=0 ) {x=-x}
else {if ( x>0 && x<2 ) {x=x**2}
else {if ( x>=2 ) {x=4}
else {x=err}}}
alert (x)
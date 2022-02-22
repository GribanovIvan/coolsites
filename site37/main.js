let array=[1,2,3,4,5]
let sum=0
for (let i=0;i<array.length;i++){
document.getElementById('center').innerHTML=document.getElementById('center').innerHTML + array[i]
sum=sum + array[i]
}
document.getElementById('center').innerHTML=document.getElementById('center').innerHTML + ', sum=' + sum + ', seconds='
array=[2,5,9,15,0,4]
for (let i=0;i<array.length;i++){
if (array[i] > 3 && array[i] < 10){document.getElementById('center').innerHTML=document.getElementById('center').innerHTML + array[i]}
}
let user = {     // объект
    name: "John",  // под ключом "name" хранится значение "John"
    surname: 'Smith'        // под ключом "age" хранится значение 30
  };
user.name='Smith'
delete user.name
let salaries = {
    John: 100,
    Ann: 160,
    Pete: 130
}
sum=0
for (let i in salaries){sum=sum + salaries[i]}
document.getElementById('center').innerHTML=document.getElementById('center').innerHTML + ', sum of salaries=' + sum
let obj = {
    Коля: 200,
    Вася: 300,
    Петя: 400
}
for (let i in obj){document.getElementById('center').innerHTML=document.getElementById('center').innerHTML + ', ' + i + ' - зарплата ' + obj[i] + ' долларов'}
let i = 0
let nodes = {
    "login":{0:'ivan',1:'root',    2:'example'},
    "age":  {0:15,    1:'ultimate',2:99},
    "wheel":{0:true,  1:false,     2:false},
    "root": {0:false, 1:true,      2:false}
}
let max=0
for (let i in nodes.login){max++}
add1.onclick = function() {
    document.getElementById('ul').innerHTML=document.getElementById('ul').innerHTML + '<li>'+nodes.login[i]+', '+nodes.age[i]+', '+nodes.wheel[i]+', '+nodes.root[i]+'</li>'
    i++
    if (i == max){i=0}
}
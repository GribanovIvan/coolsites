let task3 = () => {age=+prompt('Сколько вам лет?')
        if (age < 18) {
            alert ('А нельзя!')
        } else {if (age >= 18 )
            {window.location='https://wiki.gentoo.org/wiki/Handbook:AMD64/ru'}}}
let text = document.getElementById("add")
let msg=''
function addblock () {
    msg=msg + '<div class="block"></div>'
    text.innerHTML = msg
}
addblock()
addblock()
addblock()
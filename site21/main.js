let name = +prompt("Throw me number a")
function enterb() {
    b = +prompt("Throw me number b")
    console.log(b)
    var el = document.getElementById('name')
if (typeof el.innerText !== 'undefined') {
    // IE8-
    el.innerText = 'a=' + name + ', b=' + b
} else {
    // Нормальные браузеры
    el.textContent = 'a=' + name + ', b=' + b
}
var el = document.getElementById('our')
if (typeof el.innerText !== 'undefined') {
    // IE8-
    el.innerText = 'Наши Числа'
} else {
    // Нормальные браузеры
    el.textContent = 'Наши Числа'
}
}

var el = document.getElementById('name')
if (typeof el.innerText !== 'undefined') {
    // IE8-
    el.innerText = name
} else {
    // Нормальные браузеры
    el.textContent = name
}

function clicka() {
nametwo = name**2
var elnew = document.getElementById('nametwo')
if (typeof elnew.innerText !== 'undefined') {
    // IE8-
    elnew.innerText = nametwo
} else {
    // Нормальные браузеры
    elnew.textContent = nametwo
}
var elnew = document.getElementById('nametwob')
if (typeof elnew.innerText !== 'undefined') {
    // IE8-
    elnew.innerText = nametwo
} else {
    // Нормальные браузеры
    elnew.textContent = nametwo
}}
function clickb() {
    nameb = -name
    var elnew = document.getElementById('nameb')
    if (typeof elnew.innerText !== 'undefined') {
        // IE8-
        elnew.innerText = nameb
    } else {
        // Нормальные браузеры
        elnew.textContent = nameb
    }}
    function clickc() {
        namec = name % 10
        var elnew = document.getElementById('namec')
        if (typeof elnew.innerText !== 'undefined') {
            // IE8-
            elnew.innerText = namec
        } else {
            // Нормальные браузеры
            elnew.textContent = namec
        }}
        function clickd() {
            named = name / 3
            named = Math.round(named)
            var elnew = document.getElementById('named');
            if (typeof elnew.innerText !== 'undefined') {
                // IE8-
                elnew.innerText = named
            } else {
                // Нормальные браузеры
                elnew.textContent = named
            }}
            function clicke() {
                namee = name * 4
                var elnew = document.getElementById('namee');
                if (typeof elnew.innerText !== 'undefined') {
                    // IE8-
                    elnew.innerText = namee
                } else {
                    // Нормальные браузеры
                    elnew.textContent = namee
                }}
                function clickf() {
                    namef = name ** 2
                    var elnew = document.getElementById('namef')
                    if (typeof elnew.innerText !== 'undefined') {
                        // IE8-
                        elnew.innerText = namef
                    } else {
                        // Нормальные браузеры
                        elnew.textContent = namef
                    }}
                    function clickg() {
                        nameg = Math.sqrt(name ** 2 + b ** 2)
                        var elnew = document.getElementById('nameg')
                        if (typeof elnew.innerText !== 'undefined') {
                            // IE8-
                            elnew.innerText = nameg
                        } else {
                            // Нормальные браузеры
                            elnew.textContent = nameg
                        }}
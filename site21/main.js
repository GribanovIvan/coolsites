let name = +prompt("Throw me number");

var el = document.getElementById('name');
if (typeof el.innerText !== 'undefined') {
    // IE8-
    el.innerText = name;
} else {
    // Нормальные браузеры
    el.textContent = name;
}

function clicka() {
nametwo = name**2
var elnew = document.getElementById('nametwo');
if (typeof elnew.innerText !== 'undefined') {
    // IE8-
    elnew.innerText = nametwo;
} else {
    // Нормальные браузеры
    elnew.textContent = nametwo;
}}
function clickb() {
    nameb = -name
    var elnew = document.getElementById('nameb');
    if (typeof elnew.innerText !== 'undefined') {
        // IE8-
        elnew.innerText = nameb;
    } else {
        // Нормальные браузеры
        elnew.textContent = nameb;
    }}
    function clickc() {
        namec = name % 10
        var elnew = document.getElementById('namec');
        if (typeof elnew.innerText !== 'undefined') {
            // IE8-
            elnew.innerText = namec;
        } else {
            // Нормальные браузеры
            elnew.textContent = namec;
        }}
        function clickd() {
            named = name / 3
            named = Math.round(named)
            var elnew = document.getElementById('named');
            if (typeof elnew.innerText !== 'undefined') {
                // IE8-
                elnew.innerText = named;
            } else {
                // Нормальные браузеры
                elnew.textContent = named;
            }}
            function clicke() {
                namee = name * 4
                var elnew = document.getElementById('namee');
                if (typeof elnew.innerText !== 'undefined') {
                    // IE8-
                    elnew.innerText = namee;
                } else {
                    // Нормальные браузеры
                    elnew.textContent = namee;
                }}
                function clickf() {
                    namef = name ** 2
                    var elnew = document.getElementById('namef');
                    if (typeof elnew.innerText !== 'undefined') {
                        // IE8-
                        elnew.innerText = namef;
                    } else {
                        // Нормальные браузеры
                        elnew.textContent = namef;
                    }}
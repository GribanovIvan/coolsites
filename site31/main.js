let dovar = new Date().getFullYear() - 1991
if (new Date().getMonth() <= 8 && new Date().getDate() >= 17) {dovar--}
document.getElementById('linux').innerHTML=dovar
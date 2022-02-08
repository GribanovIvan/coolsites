const panel=document.querySelector('.panel')
function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
settings.onclick = async function() {
    for (let i = 1000; i > 899; i--) {
        await sleep(1);
     panel.style.marginLeft= (i + i - 1000) / 10 + "%"
     panel.style.opacity= 100 - i/ 200 - 94.5
   }
}
X.onclick = async function() {
    for (let i = 900; i < 1001; i++) {
        await sleep(1);
     panel.style.marginLeft= (i + i - 1000) / 10 + "%"
     panel.style.opacity= 100 - i/ 200 - 94.5
   }
}
function wallpaper(w) {
  document.body.style.backgroundImage = 'url(' + w + ')'
  document.body.style.backgroundSize = 'cover'
}
ok.onclick = function() {
  let x = document.getElementById("color").value
  document.body.style.background = x
}
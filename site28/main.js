const panel=document.querySelector('.panel')
let mobfix=899
let mobfix4=10
let mobfix3=1000
let mobfix2=94.5
if (window.screen.width < 666){
  mobfix=499
  mobfix2=96.5
  mobfix3=700
  mobfix4=4
}
function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
settings.onclick = async function() {
    for (let i = mobfix3; i > mobfix; i--) {
        await sleep(1);
     panel.style.marginLeft= (i + i - 1000) / 10 + "%"
     panel.style.opacity= 100 - i/ 200 - mobfix2
   }
}
X.onclick = async function() {
    for (let i = mobfix + 1; i < mobfix3 + 1; i++) {
        await sleep(1);
     panel.style.marginLeft= (i + i - 1000) / mobfix4 + "%"
     panel.style.opacity= 100 - i/ 200 - mobfix2
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
const script = document.createElement('script');
script.setAttribute('type', 'text/javascript');
script.setAttribute('src', '../site22/main.js');
const hidden=document.querySelector('.hidden')
const element = document.getElementById("element")
run1.onclick = function(){
document.head.appendChild(script);
document.getElementById("run1r").remove()
document.getElementById("rm2").remove()
hidden.style.display = 'block'
element.classList.add("calcs-s");
}
if(!document.getElementById("video").canPlayType('video/mp4; codecs="avc1.42E01E"')){document.getElementById("video").innerHTML='<source src="../site29/n.webm" type="video/webm">'}
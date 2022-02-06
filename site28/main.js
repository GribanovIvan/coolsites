const panel=document.querySelector('.panel')
function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
settings.onclick = async function() {
    for (let i = 1000; i > 799; i--) {
        await sleep(1);
     panel.style.marginLeft= i / 10 + "%"
     panel.style.opacity= 100 - i/ 200 - 95
   }
}
X.onclick = async function() {
    for (let i = 799; i < 1001; i++) {
        await sleep(1);
     panel.style.marginLeft= i / 10 + "%"
     panel.style.opacity= 100 - i/ 200 - 95
   }
}
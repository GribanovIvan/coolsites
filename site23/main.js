let tros = 1
let die
let gg=document.querySelector('.gg')
let elevator=document.querySelector('.elevator')
let none=document.querySelector('.none')
let danger
function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
function move1() {
    if (die != 1) {
    gg.style.marginLeft= "100px"
    danger=0
    gg.style.opacity= "1"
}
 }
 function move2() {
    if (die != 1) {
    gg.style.marginLeft= "250px"
    danger=0
    gg.style.opacity= "1"
}
 }
 function move3() {
    if (die != 1) {
    gg.style.marginLeft= "400px"
    danger=0
    gg.style.opacity= "1"
}
 }
 function goin() {
    if (die != 1) {
    gg.style.marginLeft= "-80px"
    danger=1
    gg.style.opacity= "0.5"
}
 }
async function clicke() {
     if (danger == 1) {
     die=1
     none.style.display= "none"
     gg.style.opacity= "0"
     elevator.style.marginTop="35px"
     var image = document.getElementById("imageid")
     image.src = "l2.png"
     for (let i = 35; i < 330; i++) {
          await sleep(1);
       elevator.style.marginTop= i + "px"
     }
     image.src = "die.png"
     elevator.style.marginTop="380px"
     } else alert('Мимо!')
 }
 setInterval(move1, 1200);
 setInterval(move2, 2700);
 setInterval(move3, 3100);
 setInterval(goin, 2500);
let tros = 1
let die
let gg=document.querySelector('.gg')
let elevator=document.querySelector('.elevator')
let none=document.querySelector('.none')
let danger
let fake=document.querySelector('.fake')
Element.prototype.remove = function() {
    this.parentElement.removeChild(this);
}
NodeList.prototype.remove = HTMLCollection.prototype.remove = function() {
    for(var i = this.length - 1; i >= 0; i--) {
        if(this[i] && this[i].parentElement) {
            this[i].parentElement.removeChild(this[i]);
        }
    }
} // https://stackoverflow.com/questions/3387427/remove-element-by-id
function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
function move1() {
    if (die != 1){
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
     if ( die != 1 ) {
     die=1
     document.getElementById("delme").remove()
     fake.style.display= 'block'
     none.style.display= "none"
     gg.style.opacity= "0"
     elevator.style.marginTop="35px"
     let image = document.getElementById("imageid")
     image.src = "l2.png"
     for (let i = 35; i < 330; i++) {
          await sleep(1);
       elevator.style.marginTop= i + "px"
     }
     image.src = "die.png"
     elevator.style.marginTop="380px"
     }} else alert('Мимо!')
 }
 setInterval(move1, 1200);
 setInterval(move2, 2700);
 setInterval(move3, 3100);
 setInterval(goin, 2500);

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
 let cube=document.querySelector('.ultcube')
 let martop=0
 let marleft=0
 let cw=200
 let ch=200
 let step=10
 function down() {
martop += step
if ( martop + ch > 500 ) {
    martop -= step
    alert('куда.')
}
cube.style.marginTop= martop + "px"
 }
 function up() {
    martop -= step
    if ( martop < 0 ) {
        martop=0
        alert('куда.')
    }
    cube.style.marginTop= martop + "px"
     }
     function right() {
        marleft += step
        if ( marleft + cw > 700 ) {
            marleft -= step
            alert('куда.')
        }
        cube.style.marginLeft= marleft + "px"
         }
         function left() {
            marleft -= step
            if ( marleft < 0 ) {
                marleft=0
                alert('куда.')
            }
            cube.style.marginLeft= marleft + "px"
             }
             function wmin() {
                cw -= step
                if ( cw < 200 ) {
                    cw=200
                    alert('cw must be >= 200')
                }else 
                cube.style.width= cw + "px"
                 }
         
                 function wup() {
                    cw += step
                    if ( marleft + cw > 700 ) {
                        cw -= step
                        alert('куда.')
                    }
                    if ( cw > 600 ) {
                        cw=600
                        alert('cw must be < 600')
                    }else 
                    cube.style.width= cw + "px"
                     }
             
             function hdown() {
                ch -= step
                if ( ch < 100 ) {
                    ch=100
                    alert('ch must be >= 100')
                }else 
                cube.style.height= ch + "px"
                 }
         
                 function hup() {
                    ch += step
                    if ( martop + ch > 500 ) {
                        ch -= step
                        alert('куда.')
                    }
                    if ( ch > 400 ) {
                        ch=400
                        alert('ch must be < 400')
                    }else 
                    cube.style.height= ch + "px"
                     }
function stepe() {
    step=+prompt('step?')
}
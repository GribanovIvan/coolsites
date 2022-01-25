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
     if ( die != 1 ) {
     die=1
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
    alert('куда.')
    martop -= step
}
cube.style.marginTop= martop + "px"
 }
 function up() {
    martop -= step
    if ( martop < 0 ) {
        alert('куда.')
        martop=0
    }
    cube.style.marginTop= martop + "px"
     }
     function right() {
        marleft += step
        if ( marleft + cw > 700 ) {
            alert('куда.')
            marleft -= step
        }
        cube.style.marginLeft= marleft + "px"
         }
         function left() {
            marleft -= step
            if ( marleft < 0 ) {
                alert('куда.')
                marleft=0
            }
            cube.style.marginLeft= marleft + "px"
             }
             function wmin() {
                cw -= step
                if ( cw < 200 ) {
                    alert('cw must be >= 200')
                    cw=200
                }else 
                cube.style.width= cw + "px"
                 }
         
                 function wup() {
                    cw += step
                    if ( marleft + cw > 700 ) {
                        alert('куда.')
                        cw -= step
                    }
                    if ( cw > 600 ) {
                        alert('cw must be < 600')
                        cw=600
                    }else 
                    cube.style.width= cw + "px"
                     }
             
             function hdown() {
                ch -= step
                if ( ch < 100 ) {
                    alert('ch must be >= 100    ')
                    ch=100
                }else 
                cube.style.height= ch + "px"
                 }
         
                 function hup() {
                    ch += step
                    if ( martop + ch > 500 ) {
                        alert('куда.')
                        ch -= step
                    }
                    if ( ch > 400 ) {
                        alert('ch must be < 400')
                        ch=400
                    }else 
                    cube.style.height= ch + "px"
                     }
function stepe() {
    step=+prompt('step?')
}
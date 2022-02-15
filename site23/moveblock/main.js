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
use.onclick = function() {
    let broken = 0
    if (ch=document.getElementById('chi').value < 100) {alert('ch must be >= 100');let broken=1}
    if (ch=document.getElementById('cwi').value < 200) {alert('cw must be >= 200');let broken=1}
    if (broken != 1){
    cube.style.display='block'
    document.getElementById('use').innerHTML='Изменить!'
    cube.style.marginLeft='unset'
    cube.style.marginTop='unset'
    ch=document.getElementById('chi').value
    cube.style.height= ch + "px"
    cw=document.getElementById('cwi').value
    cube.style.width= cw + "px"
    cube.style.background=document.getElementById('sh').value
}
}
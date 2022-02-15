// if(!document.getElementById("backvid").canPlayType('video/mp4; codecs="avc1.42E01E"')){document.getElementById("backvid").innerHTML='<source src="n.webm" type="video/webm">'}
if ((window.screen.availWidth / window.screen.availHeight) < (16/9))
{document.getElementById("backvid").style.maxWidth='unset';document.getElementById("backvid").style.maxHeight='101%';document.getElementById("backvid").style.minHeight='100%'}
if ((window.screen.availWidth / window.screen.availHeight) < 1.35)
{alert('сайт отображается неправильно! используйте более широкоформатный монитор')
if ((window.screen.availWidth / window.screen.availHeight) < 0.74){alert('..или переверните текущий')}}
const syo = [ 'syo_b01.ogg','syo_b02.ogg','syo_b03.ogg','syo_b04.ogg','syo_b05.ogg','syo_b06.ogg','syo_h01.ogg','syo_h02.ogg','syo_h03.ogg','syo_h04.ogg','syo_h05.ogg','syo_h06.ogg','syo_u01.ogg','syo_u02.ogg','syo_u03.ogg','syo_u04.ogg','syo_u05.ogg' ]
function listen(sound) {
    new Audio(randomfromarray(sound)).play()
}
function exit() {
    document.querySelector('.block').style.cursor='pointer'
}
function enter() {
    document.querySelector('.block').style.cursor='unset'
}
chocola.onclick = function() {
    document.getElementById("chocola-info").style.display='block'
    enter()
}
chocoexit.onclick = function() {
    document.getElementById("chocola-info").style.display='none'
    exit()
}
exit()
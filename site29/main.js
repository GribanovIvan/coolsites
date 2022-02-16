// if(!document.getElementById("backvid").canPlayType('video/mp4; codecs="avc1.42E01E"')){document.getElementById("backvid").innerHTML='<source src="n.webm" type="video/webm">'}
if ((window.screen.availWidth / window.screen.availHeight) < (16/9))
{document.getElementById("backvid").style.maxWidth='unset';document.getElementById("backvid").style.maxHeight='101%';document.getElementById("backvid").style.minHeight='100%'}
if ((window.screen.availWidth / window.screen.availHeight) < 1.35)
{alert('сайт отображается неправильно! используйте более широкоформатный монитор')
if ((window.screen.availWidth / window.screen.availHeight) < 0.74){alert('..или переверните текущий')}}
let ruen = 0
const syo = [ 'syo_b01.ogg','syo_b02.ogg','syo_b03.ogg','syo_b04.ogg','syo_b05.ogg','syo_b06.ogg','syo_h01.ogg','syo_h02.ogg','syo_h03.ogg','syo_h04.ogg','syo_h05.ogg','syo_h06.ogg','syo_u01.ogg','syo_u02.ogg','syo_u03.ogg','syo_u04.ogg','syo_u05.ogg' ]
const bani = [ 'bani_b01.ogg','bani_b02.ogg','bani_b03.ogg','bani_b04.ogg','bani_b05.ogg','bani_b06.ogg','bani_h01.ogg','bani_h02.ogg','bani_h03.ogg','bani_h04.ogg','bani_h05.ogg','bani_h06.ogg','bani_u01.ogg','bani_u02.ogg','bani_u03.ogg','bani_u04.ogg','bani_u05.ogg' ]
function listen(sound) {
    new Audio(randomfromarray(sound)).play()
}
function exit() {
    document.querySelector('.block').style.cursor='pointer'
    document.getElementById('vanilla').style.cursor='pointer'
}
function enter() {
    document.querySelector('.block').style.cursor='unset'
    document.getElementById("lang").style.display='flex'
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
vaniexit.onclick = function() {
    document.getElementById("vanilla-info").style.display='none'
    exit()
}
vanilla.onclick = function() {vanilla()}
function vanilla() {
    document.getElementById("vanilla-info").style.display='block'
    enter()
}
lang.onclick = function() {
    ruen++
    console.log (ruen % 2)
    change()
}
function change() {
    if (ruen % 2) {
    document.getElementById("lang").style.backgroundImage='url(https://upload.wikimedia.org/wikipedia/commons/f/f3/Flag_of_Russia.svg)';
    document.getElementById("lang").innerHTML='<qwe>R</qwe><rty>U</rty>'
    document.getElementById("chocodesc").innerHTML='<li>Имя Чоколы — производное от слова "chocolate", которое произносится как "чоколэйт"</li><li>Чокола обыкновенно упоминает себя в третьем лице.</li><li>Она с трудом читает <a target="_blank" rel="nofollow noreferrer noopener" class="external text" href="https://ru.wikipedia.org/wiki/кандзи"><i>кандзи</i></a>.</li><li>В более ранних проектах Чоколы, до "Nekopara", ее волосы были изображены в более темных цветах — часто черных.</li><li>Породы кошек Чокола и <a href="#" onclick="vanilla()" title="Ванилла">Ванилла</a> были неизвестны до выпуска веб-сайта Nekopara OVA, где они были подтверждены как смешанные породы.</li><li>Актриса озвучки Чоколы — Химари — участвовала в озвучке многих других визуальных романов.</li><li>В OVA она и ее сестра получили свои колокольчики немного позже переезда и открытия кафе. В аниме, из-за воспоминаний в первом эпизоде, это показывает, что они заработали свои колокольчики до переезда!</li>'
    document.getElementById("chocodesc").style.fontSize='1.34em'
}else{
    document.getElementById("lang").style.backgroundImage='url(https://upload.wikimedia.org/wikipedia/en/a/a4/Flag_of_the_United_States.svg)';
    document.getElementById("lang").innerHTML='EN(<span>U</span><abc>S</abc><dd>A</dd>)'
    document.getElementById("chocodesc").innerHTML='<li>Chocola\'s name is a pun on the word "chocolate".</li>    <li>Chocola typically expresses herself in third person.</li>    <li>Chocola has trouble reading <a target="_blank" rel="nofollow noreferrer noopener" class="external text" href="https://en.wikipedia.org/wiki/Kanji">Kanji</a>.</li>    <li>In Chocola\'s earlier designs prior to <i>Nekopara</i>, her hair was depicted in darker colors - often black.</li>    <li>Chocola\'s and <a href="#" onclick="vanilla()" title="Vanilla">Vanilla</a>\'s cat breeds were unknown until the release of the Nekopara OVA website, where they were confirmed to be mixed breeds.</li>    <li>Chocola\'s voice actress, Himari, has appeared in many other visual novels.</li>    <li>In the OVA, she and her sister got their bells slightly after the move and the opening of the Cafe. In the Anime, due to a flashback in the first episode, it shows they had earned their bells before the move!</li>'
    document.getElementById("chocodesc").style.fontSize='x-large'
}}
change()
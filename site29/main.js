if(!document.getElementById("backvid").canPlayType('video/mp4; codecs="avc1.42E01E"')){document.getElementById("backvid").innerHTML='<source src="n.webm" type="video/webm">'}
if ((window.screen.availWidth / window.screen.availHeight) < (16/9))
{document.getElementById("backvid").style.maxWidth='unset';document.getElementById("backvid").style.maxHeight='101%';document.getElementById("backvid").style.minHeight='100%'}
if ((window.screen.availWidth / window.screen.availHeight) < 1.35)
{alert('сайт отображается неправильно! используйте более широкоформатный монитор')
if ((window.screen.availWidth / window.screen.availHeight) < 0.74){alert('..или переверните текущий')}}
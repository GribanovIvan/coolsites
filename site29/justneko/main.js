// if(!document.getElementById("backvid").canPlayType('video/mp4; codecs="avc1.42E01E"')){document.getElementById("backvid").innerHTML='<source src="../n.webm" type="video/webm">'}
if ((window.screen.availWidth / window.screen.availHeight) < (16/9))
{document.getElementById("backvid").style.maxWidth='unset';document.getElementById("backvid").style.maxHeight='101%'}
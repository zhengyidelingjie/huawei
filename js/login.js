var box1=document.getElementsByClassName('accountLogin');
var box2=document.getElementsByClassName('scanLogin');
var code=document.getElementsByClassName('code');
var help=document.getElementsByClassName('help');
account.onclick=function(){
	account.style.color='#b40707';
	scan.style.color='black';
	box1[0].style.display='block';
	box2[0].style.display='none';
}
scan.onclick=function(){
	scan.style.color='#b40707';
	box1[0].style.display='none';
	box2[0].style.display='block';
	account.style.color='black';
}
code[0].onmouseenter=function(){
	help[0].style.display='inline-block';
}
code[0].onmouseleave=function(){
	help[0].style.display='none';
}

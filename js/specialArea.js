/*图片向上滑动*/
setTimeout(function(){
	$('.h-big').slideUp(1000);
	$('.h-new').css('display','block');

},6000);



/* 关闭顶部图片 */
var close=document.getElementsByClassName('h-close');
var header=document.getElementById('header');
var img1=document.getElementById("imgHead")
close[0].onclick=function(){
img1.style.display='none';
close[0].style.display='none'
};


/* 图片轮播 */


var num=0;
var timer006;
var width=$('#con').children().children().width();
function go(){
	timer006=setInterval(function(){
		num++;
		if(num>5){
			num=0;
			$('#con').css({'left':-num*width+'px'});
			// css不带过渡效果
			num=1;
		}
		if(num==5){
				$('#btn>li').eq(0).addClass('current');
				$('#btn>li').eq(0).siblings().removeClass('current');
		}
		$('#con').animate({'left':-num*width+'px'},500);
		$('#btn>li').eq(num).addClass('current');
		$('#btn>li').eq(num).siblings().removeClass('current');
	},5000)
}
go();
$('#right').click(function(event) {
	num++;
	if(num>5){
			num=0;
			$('#con').css({'left':-num*width+'px'});
			// css不带过渡效果
			num=1;
		}
		if(num==5){
				$('#btn>li').eq(0).addClass('current')
				$('#btn>li').eq(0).siblings().removeClass('current')
		}
		$('#con').animate({'left':-num*width+'px'},500);
		$('#btn>li').eq(num).addClass('current')
		$('#btn>li').eq(num).siblings().removeClass('current')
});

$('#left').click(function(event) {
	num--;
	if(num<0){
			num=5;
			$('#con').css({'left':-num*width+'px'});
			// css不带过渡效果
			num=4;
		}
		if(num==0){
				$('ol li').eq(5).addClass('current')
				$('ol li').eq(5).siblings().removeClass('current')
		}
		$('#con').animate({'left':-num*width+'px'},500);
		$('#btn>li').eq(num).addClass('current')
		$('#btn>li').eq(num).siblings().removeClass('current')
});
$('#banner').hover(function(){
	clearInterval(timer006);
	$('#left').slideDown();
	$('#right').slideDown();
},function(){
	go();
	$('#left').slideUp();
	$('#right').slideUp();
})
$('.choose').hover(function(){
	clearInterval(timer006);
})
$('#btn>li').click(function(event) {
                    num=$(this).index();
                    $('#con').css('left', -num*width+'px');
                    $(this).addClass('current');
                    $(this).siblings().removeClass('current');
                });


/* 关闭顶部图片 */
var close=document.getElementsByClassName('h-close');
var header=document.getElementById('header');
var img1=document.getElementById("imgHead")
close[0].onclick=function(){
  img1.style.display='none';
  close[0].style.display='none'
}


/* 图片轮播 */

var num=0;
var timer001;
var width=$('#con').children().children().width();
function go(){
	timer001=setInterval(function(){
		num++;
		if(num>9){
			num=0;
			$('#con').css({'left':-num*width+'px'});
			// css不带过渡效果
			num=1;
		}
		if(num==9){
				$('#btn>li').eq(0).addClass('current');
				$('#btn>li').eq(0).siblings().removeClass('current');
		}
		$('#con').animate({'left':-num*width+'px'},500);
		$('#btn>li').eq(num).addClass('current');
		$('#btn>li').eq(num).siblings().removeClass('current');
	},3000)
}
go();
$('#right').click(function(event) {
	num++;
	if(num>9){
			num=0;
			$('#con').css({'left':-num*width+'px'});
			// css不带过渡效果
			num=1;
		}
		if(num==9){
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
			num=9;
			$('#con').css({'left':-num*width+'px'});
			// css不带过渡效果
			num=8;
		}
		if(num==0){
				$('ol li').eq(9).addClass('current')
				$('ol li').eq(9).siblings().removeClass('current')
		}
		$('#con').animate({'left':-num*width+'px'},500);
		$('#btn>li').eq(num).addClass('current')
		$('#btn>li').eq(num).siblings().removeClass('current')
});
$('#banner').hover(function(){
	clearInterval(timer001);
	$('#left').slideDown();
	$('#right').slideDown();
},function(){
	go();
	$('#left').slideUp();
	$('#right').slideUp();
})

$('.choose').hover(function(){
	clearInterval(timer001);
})
$('#btn>li').click(function(event) {
	
                    num=$(this).index();
                  $('#con').css('left', -num*width+'px');
                    $(this).addClass('current');
                    $(this).siblings().removeClass('current');
                });
                

/*商品图片向左向右*/
 $('.left-btn').click(function(){
 	$(this).siblings('.btn-goods').animate({'left':'0'},500);
 })
$('.right-btn').click(function(){
 	$(this).siblings('.btn-goods').animate({'left':-1199+'px'},500);
 })
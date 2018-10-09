/******固定导航栏*****/
$(window).scroll(function(){
				if($(window).scrollTop()>=23){
					$('.nav').addClass('fixednav');
				}else{
					$('.nav').removeClass('fixednav');
				}
			})
/******轮播图*****/
var num=0;
var timer;
var width=$('#box').children().children().width();
function go(){
	timer=setInterval(function(){
		num++;
		if(num>3){
			num=0;
			$('#box').css({'left':-num*width+'px'});
			// css不带过渡效果
			num=1;
		}
		if(num==3){
				$('ol li').eq(0).addClass('current');
				$('ol li').eq(0).siblings().removeClass('current');
		}
		$('#box').animate({'left':-num*width+'px'},500);
		$('ol li').eq(num).addClass('current');
		$('ol li').eq(num).siblings().removeClass('current');
	},5000)
}
go();
$('#right').click(function(event) {
	num++;
	if(num>3){
			num=0;
			$('#box').css({'left':-num*width+'px'});
			// css不带过渡效果
			num=1;
		}
		if(num==3){
				$('ol li').eq(0).addClass('current')
				$('ol li').eq(0).siblings().removeClass('current')
		}
		$('#box').animate({'left':-num*width+'px'},500);
		$('ol li').eq(num).addClass('current')
		$('ol li').eq(num).siblings().removeClass('current')
});

$('#left').click(function(event) {
	num--;
	if(num<0){
			num=3;
			$('#box').css({'left':-num*width+'px'});
			// css不带过渡效果
			num=2;
		}
		if(num==0){
				$('ol li').eq(3).addClass('current')
				$('ol li').eq(3).siblings().removeClass('current')
		}
		$('#box').animate({'left':-num*width+'px'},500);
		$('ol li').eq(num).addClass('current')
		$('ol li').eq(num).siblings().removeClass('current')
});
$('.banner').hover(function(){
	clearInterval(timer);
	$('#left').slideDown();
	$('#right').slideDown();
},function(){
	go();
	$('#left').slideUp();
	$('#right').slideUp();
})
$('ol li').click(function(event) {
                    num=$(this).index();
                    $('#box').css('left', -num*width+'px');
                    $(this).addClass('current');
                    $(this).siblings().removeClass('current');
                });
/******侧边栏*****/
$(window).scroll(function(event){
				if($(window).scrollTop()>$(window).height()){
					$('.help1').fadeIn();
				}else{
					$('.help1').fadeOut();
				}
			})
			$('#backTop').click(function(){
				$('html,body').animate({'scrollTop':'0px'},500);
			})
/******商品展示的左右翻页*****/
$('.back').click(function(){
	$(this).siblings('.goods').children('ul').animate({'left':'0'},500);
	$('.page span:nth-of-type(1)').html('1');
})
$('.forward').click(function(){
	$(this).siblings('.goods').children('ul').animate({'left':-$('.goods').width()+'px'},500);
	$('.page span:nth-of-type(1)').html('2');
})
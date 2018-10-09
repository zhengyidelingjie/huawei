function fun(n){
	$('.asideMenu>li').eq(n).addClass('current').siblings().removeClass('current')
    $('.asideMenu>li').eq(n).children('hr').css('display','block');
    $('.asideMenu>li').children('hr').eq(n).siblings().css('display','none')
}

$(window).scroll(function(){
	var st=$(window).scrollTop();
	
	if((st>=$('.special2').eq(0).offset().top)&&(st<=$('.special2').eq(6).offset().top+220)){
      	
    		$('.aside').css('display','block')
    		
//           
	}else{
		$('.aside').css('display','none')
		
		
	}
	
	 if(st>=$('.special2').eq(6).offset().top){
		fun(6);
	}else if(st>=$('.special2').eq(5).offset().top){
		fun(5);
	}else if(st>=$('.special2').eq(4).offset().top){
		fun(4);
	}else if(st>=$('.special2').eq(3).offset().top){
		fun(3);
	}else if(st>=$('.special2').eq(2).offset().top){
		fun(2);
	}else if(st>=$('.special2').eq(1).offset().top){
		fun(1);
	}else {
		fun(0);
		
		
	}
	
})

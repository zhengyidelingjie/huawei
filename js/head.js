$('.h-flow').click(function(){
	$('.h-big').css('display','none');
//	$('.h-new').css('display','block');
	})


setTimeout(function(){
	$('.h-big').slideUp(1000);
	$('.h-new').css('display','block');

},6000)

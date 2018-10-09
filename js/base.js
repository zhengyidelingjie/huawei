/*===========================
 *作者：动力启航(谢凯)
 *网址：http://www.it134.cn
 *转发请保留作者信息，谢谢
===========================*/

//=====================全局函数========================
//Tab控制函数
function tabs(tabId, tabNum) {
	//设置点击后的切换样式
	$(tabId + " .tab li").removeClass("curr");
	$(tabId + " .tab li").eq(tabNum).addClass("curr");
	//根据参数决定显示内容
	$(tabId + " .tabcon").hide();
	$(tabId + " .tabcon").eq(tabNum).show();
}
//=====================全局函数========================

//==================图片详细页函数=====================
//鼠标经过预览图片函数
function preview(img) {
	$("#preview .jqzoom img").attr("src", $(img).attr("src"));
	$("#preview .jqzoom img").attr("jqimg", $(img).attr("bimg"));
}

//图片放大镜效果
$(function() {
	$(".jqzoom").jqueryzoom({
		xzoom: 380,
		yzoom: 410
	});
});

//图片预览小图移动效果,页面加载时触发
$(function() {
	var tempLength = 0; //临时变量,当前移动的长度
	var viewNum = 5; //设置每次显示图片的个数量
	var moveNum = 1; //每次移动的数量
	var moveTime = 300; //移动速度,毫秒
	var scrollDiv = $(".spec-scroll .items ul"); //进行移动动画的容器
	var scrollItems = $(".spec-scroll .items ul li");
	//移动容器里的集合
	var moveLength = scrollItems.eq(0).width() * moveNum; //计算每次移动的长度
	var countLength = 2 * scrollItems.eq(0).width(); //计算总长度,总个数*单个长度

	//下一张
	$(".spec-scroll .next").bind("click", function() {
		if(tempLength < countLength) {
			if((countLength - tempLength) > moveLength) {
				scrollDiv.animate({
					left: "-=" + moveLength + "px"
				}, moveTime);
				tempLength += moveLength;
			} else {
				scrollDiv.animate({
					left: "-=" + (countLength - tempLength) + "px"
				}, moveTime);
				tempLength += (countLength - tempLength);
			}
		}
	});
	//上一张
	$(".spec-scroll .prev").bind("click", function() {
		if(tempLength > 0) {
			if(tempLength > moveLength) {
				scrollDiv.animate({
					left: "+=" + moveLength + "px"
				}, moveTime);
				tempLength -= moveLength;
			} else {
				scrollDiv.animate({
					left: "+=" + tempLength + "px"
				}, moveTime);
				tempLength = 0;
			}
		}
	});
});
//==================图片详细页函数=====================/
/**************点击切换事件****************/

//切换图片
$('#black').click(function() {
	$('.spec-preview img').attr({
		'jqimg': 'images/huawei10/black1.jpg',
		'src': 'images/huawei10/black01.jpg'
	})
	$('.items').css('display', 'block');
	$('.play').css('display', 'none')
	$('.pro-txtcolor').html('幻夜黑 ')

})
$('#blue').click(function() {
	$('.spec-preview img').attr({
		'jqimg': 'images/huawei10/blue1.jpg',
		'src': 'images/huawei10/blue01.jpg'
	})
	$('.items').css('display', 'none');
	$('.play').css('display', 'block')
	$('.pro-txtcolor').html('幻影蓝 ')
})
$('.pro-choose a').click(function() {
	//切换价格
	var price;
	var version;
	$(this).addClass('on');
	$(this).parent().siblings().children().removeClass('on')

	if($(this).parent().parent().parent().hasClass('pro-ver')) {
		var index = $(this).parent().index();
		switch(index) {
			case 0:
				price = 2799.00;
				version = '全网通 6GB+64GB ';
				break;
			case 1:
				price = 3199.00;
				version = '全网通 6GB+128GB '
				break;
			case 2:
				price = 3599.00;
				version = '全网通 8GB+128GB '
				break;
		}

		$('.pro-price').html('<font>￥</font>' + price.toFixed(2));
		$('.pro-txtsize').html(version)
	}
})
//购物车数量	
var num = parseInt($('.pro-cart>span').text());;
$('#add').click(function() {
	++num;
	$('.pro-cart span').html(num);
	if(num > 0) {
		$('#reduce').css('cursor', 'pointer')
	}
})
$('#reduce').click(function() {
	--num;
	$('.pro-cart span').html(num);
	if(num < 1) {
		num = 0;
		$('.pro-cart span').html(num);
		$('#reduce').css('cursor', 'not-allowed')
	}
})
//加入购物车弹窗
$('#addcart').click(function() {
	layer.open({
		type: 1,
		area: ['460px', '187px'],
		title: false,
		closeBtn: 0, //不显示关闭按钮
		btnAlign: 'c',
		shadeClose: true, //开启遮罩关闭
		content: '<div class="cartwindows" ><span class="cartwindows-close"><img src="images/huawei10product/close.png" /></span><span class="cartwindows-icon"><img src="images/huawei10product/layericon.png"/></span><h3 id="pro-name">荣耀Note10<span class="pro-txtsize">全网通 6GB+64GB</span><span class="pro-txtcolor">幻夜黑 </span>AMOLED全面屏手机 AI智能 GT游戏加速 双卡双待 长续航成功加入购物车！</h3  ><button class="keepshop">再逛逛</button><button class="keepshop account">去结算</button></div>'

	});
});

$(document).on('click', '.cartwindows-close', function() {
	layer.closeAll();
});
$(document).on('click', '.keepshop', function() {
	layer.closeAll();
});

/*点击下拉框时发生时间*/
$('.pro-pulldown .pro-checkbox').click(function() {

	if($(".pro-pulldown input[type='checkbox']").is(':checked')) {
		$('.pro-pulldown a').css('border-color', '#ca141d')
		$('.pro-pulldown-hide').css('display', 'none')
	}
	if(!$(".pro-pulldown input[type='checkbox']").is(':checked')) {
		$('.pro-pulldown a').css('border-color', '#d6d6d6')
		$('.pro-pulldown-xiala').css('border-bottom', '1px solid #ffffff')
	}
})
$('.pro-pulldown li').hover(function() {
	console.log('ccc')
	$('.pro-pulldown-hide').css('display', 'block')
	$('.pro-pulldown-xiala').css({
		'border-bottom': '1px solid #ffffff',
		'z-index': '99'
	})
}, function() {
	$('.pro-pulldown-hide').css('display', 'none')
	if(!$(".pro-pulldown input[type='checkbox']").is(':checked')) {
		console.log('ddd')
		$('.pro-pulldown-xiala').css({
			'border-bottom': '1px solid #d6d6d6',
			'z-index': '99'
		})
	}
	if($(".pro-pulldown input[type='checkbox']").is(':checked')) {
		$('.pro-pulldown-xiala').css('border-bottom', '1px solid #ca141d')
	}
})
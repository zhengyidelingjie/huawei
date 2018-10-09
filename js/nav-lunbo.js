
				var timer;
				var page = 0;
				var conA = document.getElementById('con1');
				var bannerA = document.getElementById('banner1');
				var btnA = document.getElementById('dot1')
//				var jsLeft = document.getElementById("left");
//				var jsRight = document.getElementById("right");
				btnA.children[0].style.background = 'red';
				//图片滑动
				timer = setInterval(huadong, 2000);

				function huadong() {
					page++;
					if(page > conA.children.length - 1) {
						page = 0;
					}
					
					if(page < 0) {
						page = conA.children.length - 1;
					}
					conA.style.left = -page * 1200 + 'px';
					for(var j = 0; j < btnA.children.length; j++) {
						btnA.children[j].style.background = "white";
					}
					btnA.children[page].style.background = 'red';
				}

				//鼠标进入
				bannerA.onmouseenter = function() {
					clearInterval(timer);
					
				}

				//鼠标移出
				bannerA.onmouseleave = function() {
					timer = setInterval(huadong, 1000);
					
				}

				//点击dot
				for(var k = 0; k < btnA.children.length; k++) {
					btnA.children[k].setAttribute('index', k)

					btnA.children[k].onclick = function() {

						var index = this.getAttribute('index')
						page = index;
						console.log(index)
						for(var i = 0; i < btnA.children.length; i++) {
							btnA.children[i].style.background = "white";
						} //清除点
						conA.style.left = 0 + 'px';
						conA.style.left = -index * 1200 + 'px'; //跳转
						this.style.background = 'red';
					}
				}
//				//点击左键
//				jsLeft.onclick = function() {
//					page = page - 2;
//					huadong();
//
//				}
//				//点击右键
//				jsRight.onclick = function() {
//					huadong();
//				}
//				//移入左键
//				jsLeft.onmouseover = function() {
//					this.style.backgroundColor = "rgba(0,0,0,0.65)";
//				}
//
//				jsLeft.onmouseout = function() {
//					this.style.backgroundColor = "rgba(0,0,0,0.4)";
//				}
//				//移入右键
//				jsRight.onmouseover = function() {
//					this.style.backgroundColor = "rgba(0,0,0,0.65)";
//				}
//
//				jsRight.onmouseout = function() {
//					this.style.backgroundColor = "rgba(0,0,0,0.4)";
//				}
			
/*******验证码*******/
var nums = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0",
    'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', 
    'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'
];
var str = '';
var verVal = drawCode();
// 绘制验证码
function drawCode (str) {
    var canvas = document.getElementById("verifyCanvas"); //获取HTML端画布
    var context = canvas.getContext("2d"); //获取画布2D上下文
    context.fillStyle = "cornflowerblue"; //画布填充色
    context.fillRect(0, 0, canvas.width, canvas.height); //清空画布
    context.fillStyle = "white"; //设置字体颜色
    context.font = "25px Arial"; //设置字体
    var rand = new Array();
    var x = new Array();
    var y = new Array();
    for (var i = 0; i < 4; i++) {
        rand.push(rand[i]);
        rand[i] = nums[Math.floor(Math.random() * nums.length)]
        x[i] = i * 20 + 10;
        y[i] = Math.random() * 20 + 20;
        context.fillText(rand[i], x[i], y[i]);
    }
    str = rand.join('').toUpperCase();
    //画3条随机线
    for (var i = 0; i < 3; i++) {
        drawline(canvas, context);
    }

    // 画30个随机点
    for (var i = 0; i < 30; i++) {
        drawDot(canvas, context);
    }
    convertCanvasToImage(canvas);
    return str;
}

// 随机线
function drawline (canvas, context) {
    context.moveTo(Math.floor(Math.random() * canvas.width), Math.floor(Math.random() * canvas.height)); //随机线的起点x坐标是画布x坐标0位置，y坐标是画布高度的随机数
    context.lineTo(Math.floor(Math.random() * canvas.width), Math.floor(Math.random() * canvas.height)); //随机线的终点x坐标是画布宽度，y坐标是画布高度的随机数
    context.lineWidth = 0.5; //随机线宽
    context.strokeStyle = 'rgba(50,50,50,0.3)'; //随机线描边属性
    context.stroke(); //描边，即起点描到终点
}
// 随机点(所谓画点其实就是画1px像素的线，方法不再赘述)
function drawDot (canvas, context) {
    var px = Math.floor(Math.random() * canvas.width);
    var py = Math.floor(Math.random() * canvas.height);
    context.moveTo(px, py);
    context.lineTo(px + 1, py + 1);
    context.lineWidth = 0.2;
    context.stroke();

}
// 绘制图片
function convertCanvasToImage (canvas) {
    document.getElementById("verifyCanvas").style.display = "none";
    var image = document.getElementById("code_img");
    image.src = canvas.toDataURL("image/png");
    return image;
}

// 点击图片刷新
document.getElementById('code_img').onclick = function() {
    resetCode();
}

function resetCode () {
    $('#verifyCanvas').remove();
    $('#code_img').before('<canvas width="100" height="40" id="verifyCanvas"></canvas>')
    verVal = drawCode();
}
/*******国家下拉列表*******/
var countryArr = ["安哥拉","阿富汗","阿尔巴尼亚","阿尔及利亚","安道尔共和国","安圭拉岛","安提瓜和巴布达","阿根廷","亚美尼亚","澳大利亚","奥地利","阿塞拜疆","巴哈马","巴林","孟加拉国","巴巴多斯"];
function createOption(obj, data) {
        for (var i in data) {
          var op = new Option(data[i], i);   // 创建下拉列表中的option选项
          obj.options.add(op);               // 将选项添加到下拉列表中
        }
      }
      var country = document.getElementsByClassName('country');
      createOption(country[0], countryArr);
      createOption(country[1], countryArr);
      

/*******选项卡*******/
var phonenum=document.getElementById('current');
var email=document.getElementById('current2');
var phonenumbox=document.getElementById('phoneNum');
var emailbox=document.getElementById('email');
email.onclick=function(){
	emailbox.style.display='block';
	phonenumbox.style.display='none';
	email.style.background='#B40707';
	phonenum.style.background='#CCCCCC';
}
phonenum.onclick=function(){
	phonenumbox.style.display='block';
	emailbox.style.display='none';
	phonenum.style.background='#B40707';
	email.style.background='#CCCCCC';
}



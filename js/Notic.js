	
    (function (win){  
     var callboarTimer;  
     var callboard = $('#callboard');  
     var callboardUl = callboard.find('ul');  
     var callboardLi = callboard.find('li');  
     var liLen = callboard.find('li').length;  
     var initHeight = callboardLi.first().outerHeight(true);  //返回第一个匹配元素的外部高度（含padding和border）
   //first表示被选元素的后代 从第一个直到最后一个
     win.autoAnimation = function (){  
         if (liLen <= 1) return;  
         var self = arguments.callee;  //arguments.callee代表自身所在的函数
         var callboardLiFirst = callboard.find('li').first();  
         callboardLiFirst.animate({  
             marginTop:-initHeight  
         }, 500, function (){  
             clearTimeout(callboarTimer);  
             callboardLiFirst.appendTo(callboardUl).css({marginTop:0});  // 把标签b追加到p元素中，写法为$("b").appendTo("p");
             //将所有匹配的元素追加到指定的元素集合中
             callboarTimer = setTimeout(self, 1000);  //调用自身函数
         });  
     }  
   
     callboard.mouseenter(  
         function (){  
             clearTimeout(callboarTimer);  
         }).mouseleave(function (){  
             callboarTimer = setTimeout(win.autoAnimation, 1000);  
         });  
 }(window));  
 setTimeout(window.autoAnimation, 1000); 

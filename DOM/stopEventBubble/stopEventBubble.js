/*  常见事件对象的属性和方法
        阻止 事件冒泡 : 
          标准写法：利用 事件对象里面的stopPropagation()方法   stop 停止 Propagation 传播
          非标准写法：IE6-IE8利用事件对象 cancelBubble属性   cancel 取消  bubble 冒泡
        */

var grandfather = document.getElementById('grandfather');
var father = document.getElementById('father');
var son = document.getElementById('son');

//son 设置为 事件冒泡阶段触发
son.addEventListener('click', function (event) {
    alert('son');
    //1    
    //标准写法：利用 事件对象里面的stopPropagation()方法
    // event.stopPropagation();  //stop 停止 //Propagation 传播  

    //IE6-IE8利用事件对象 cancelBubble属性 阻止 事件冒泡
    // event.cancelBubble = true;   //cancel 取消  bubble 冒泡
    //2
    if (event && event.stopPropagation) {
        event.stopPropagation();
    } else {
        window.event.cancelBubble = true;
    }
}, false)
//当事件冒泡到 id为son的div元素 后，就不再向上冒泡.

//father 设置为 事件冒泡阶段触发
father.addEventListener('click', function (event) {
    alert('father');
    // event.stopPropagation();

    //IE6-IE8利用事件对象 cancelBubble属性 阻止 事件冒泡
    event.cancelBubble = true;
}, false)
//grandfather 设置为 事件冒泡阶段触发
grandfather.addEventListener('click', function (event) {
    alert('grandfather');
    // event.stopPropagation();

    //IE6-IE8利用事件对象 cancelBubble属性 阻止 事件冒泡
    event.cancelBubble = true;
}, false)

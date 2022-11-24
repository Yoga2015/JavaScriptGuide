// 实现缓动效果原理的思路：
// 1、让盒子每一次移动的距离慢慢的变小，那速度就会慢慢落下来，这是最基本的地方。
// 2、怎么样才能够得到这个距离会慢慢变小呢？
// 3、停止的条件是 ： 让当前盒子位置等于目标位置就停止定时器
// 4、注意步长值需要取整

function animation(obj, target, callback) {
    // console.log(callback);   callback = function(){}  调用的时候 callback()

    //先清除以前的定时器，只保留当前一个定时器执行
    clearInterval(obj.timer);
    obj.timer = setInterval(function () {  //给不同的元素指定了不同的定时器
        //步长值写到定时器的里面
        //把我们的步长值改为整数 ，不要出现小数的问题，就向上取整
        // let step = Math.ceil((target - obj.offsetLeft) / 10);
        let step = (target - obj.offsetLeft) / 10;
        //步长值为正数，就向上取整 ;步长值为负数， 就向下取整
        step = step > 0 ? Math.ceil(step) : Math.floor(step);
        if (obj.offsetLeft == target) {
            //停止动画  ，本质是停止定时器
            clearInterval(obj.timer);
            // 回调函数写到定时器结束里面
            if (callback) {
                callback();
            }
        }
        //把每一次加1这个步长值改为一个慢慢变小的值,步长公式：（目标值-现在的位置）/ 10 
        obj.style.left = obj.offsetLeft + step + 'px';

    }, 15);

}

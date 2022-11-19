// 1、整个案例可以分为三个功能模块：
// (1)、鼠标经过 preview_img 小图片盒子，黄色的遮挡层和大图片盒子显示，离开隐藏两个盒子功能。
// (2)、黄色遮挡层跟随鼠标功能。
// (3)、移动黄色遮挡层，大图片跟随移动功能。

//注意：因为我们的js代码 是写到了 外部的 js文件里面的，所以你要给 window 加一个load 事件,
// 等着页面里面所有结构加载完了, 才再来执行我们的js文件。
window.addEventListener('load', function () {
    //事件源  获取元素
    var preview = document.querySelector('.preview_img');
    var mask = document.querySelector('.mask');  //黄色遮挡层
    var big = document.querySelector('.big');  //大图片

    //注册事件   事件处理程序
    // (1)鼠标经过 preview_img小图片盒子，就显示 和 隐藏 mask黄色的遮挡层和big大图片盒子
    preview.addEventListener('mousemover', function () {
        mask.style.display = "block";
        big.style.display = "block";
    });
    preview.addEventListener('mouseout', function () {
        mask.style.display = "none";
        big.style.display = "none";
    });

    // 2、案例分析：
    // (1)、黄色遮挡层 跟随 鼠标功能。
    // (2)、把 鼠标在页面中的坐标 给 遮挡层 不合适，因为 遮挡层坐标 以父盒子为准。
    //      （此时我们应该把 鼠标在盒子内的坐标，给这个黄色的遮挡层才是合适的。）
    // (3)、首先是先获得 鼠标在盒子内的坐标，
    // (4)、然后把这坐标数值给 黄色的遮挡层 做为left 和 top 值。
    // (5)、接下来用到我们的鼠标移动事件了，但是前提还是在小图片盒子内移动。
    //      （只有在小图片盒子内移动才会触发这个事情。）
    //（6）、发现，黄色遮挡层位置不对，需要再减去何止自身高度和宽度的一半。
    //（7）、遮挡层不能超出小图片盒子范围
    //（8）、如果小于零，就把坐标设置为 0
    // (9)、如果 大于 黄色遮挡层 最大的移动距离，就把 坐标设置为最大的移动距离。
    // (10)、黄色遮挡层的最大移动距离：小图片盒子宽度 减去 黄色遮挡层盒子宽度

    // 2、鼠标移动的时候，让黄色遮挡层跟着鼠标来走，并且不超出小图片盒子的范围
    preview.addEventListener('mousemove', function (e) {
        //(1) 先计算出 鼠标在盒子内的坐标  注意父元素一直到body层 之间 有没有定位
        var x = e.pageX - preview.offsetLeft;
        var y = e.pageY - preview.offsetTop;
        // console.log(x, y);
        //记得把鼠标设置在黄色遮挡层中间
        //(2) 减去 盒子高度 300 的一半是150 ，就是mask的最终left和top值了
        //(3)mask遮挡层移动的距离
        var maskMoveX = x - mask.offsetWidth / 2;
        var maskMoveY = y - mask.offsetHeight / 2;

        //(4) 如果 x 坐标 小于了 0 ，就让他停在 0 的位置
        // 遮挡层的最大移动距离   
        maskMaxX = preview.offsetWidth - mask.offsetWidth;
        maskMaxY = preview.offsetHeight - mask.offsetHeight;

        if (maskMoveX <= 0) {
            maskMoveX < 0;
        } else if (maskMoveX >= maskMaxX) {
            mask = maskMaxX;

        }
        // 遮挡层 是个正方形的，正方形的宽度和高度是一样的 300 * 300 ，完全可以把它替换成maskMax
        if (maskMoveY <= 0) {
            maskMoveY = 0;
        } else if (maskMoveY >= maskMaxY) {
            maskMoveY = maskMaxY;
        }
        mask.style.left = maskMoveX + 'px';
        mask.style.top = maskMoveY + 'px';
        //现在黄色遮挡层已经可以跟随 鼠标来走了，但是也没有溢出现象了

        // 案例分析：
        // （1）、当移动黄色遮挡层，大图片跟随移动功能。
        // （2）、求出大图片移动距离公式：
        // 大图片移动距离 = 遮挡层移动距离 * 大图片最大移动距离 / 遮挡层的最大移动距离 
        // 大图片
        var bigImg = document.querySelector('.bigImg');
        // 大图片最大移动距离
        var bigMaxX = bigImg.offsetWidth - big.offsetWidth;
        var bigMaxY = bigImg.offsetHeight - big.offsetHeight;
        // 大图片的移动距离  X  Y
        var bigMoveX = maskMoveX * bigMaxX / maskMaxX;
        var bigMoveY = maskMoveY * bigMaxY / maskMaxX;
        bigImg.style.left = -bigMoveX + 'px';
        bigImg.style.top = -bigMoveY + 'px';

    })

})


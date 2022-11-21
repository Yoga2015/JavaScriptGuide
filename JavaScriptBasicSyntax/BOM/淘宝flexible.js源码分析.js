(function flexible(window, document) {
    // 获取的是 HTML  根元素
    let docEL = document.documentElement;
    // dpr  物理像素比
    let dpr = window.devicePixelRatio || 1;

    // adjust body font size 设置 body 的字体大小   
    function setBodyFontSize() {
        if (document.body) {
            document.body.style.fontSize = (12 * dpr) + 'px';
        } else {
            document.addEventListener('DOMContentLoaded', setBodyFontSize)
        }
    }

    setBodyFontSize();

    // set 1 rem =  viewWidth  / 10  设置我们 HTML元素的文字大小
    function setRemUnit() {
        let rem = docEL.clientWidth / 10;
        docEL.style.fontSize = rem + 'px';
    }

    setRemUnit();

    //reset rem unit on page resize  当我们页面尺寸大小发生变化的时候，要重新设置下 rem 的大小
    window.addEventListener('resize', setRemUnit);
    //pageshow 是我们重新加载页面触发的事件
    window.addEventListener('pageshow', function (e) {
        //e.persisted 返回的是true ,就是说如果这个页面是从缓存取过来的页面，也需要重新计算一下 rem的大小
        if (e.persisted) {
            setRemUnit()
        }
    })

    // detect 0.5px supports 有些移动端的浏览器不支持0.5像素的写法

    if (dpr >= 2) {
        var fakeBody = document.createElement('body')

        var testElement = document.createElement('div')

        testElement.style.border = '.5px solid transparent'

        fakeBody.appendChild(testElement)

        docEL.appendChild(fakeBody)

        if (testElement.offsetHeight === 1) {
            docEL.classList.add('hairlines')

        }

        docEL.removeChild(fakeBody)

    }


}(window, document));

console.log(window.devicePixelRatio);
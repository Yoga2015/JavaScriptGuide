class Window {
    alert(param) { };
    onLoad() { };
    onClick() { };
    onMouseDown() { };
    //...
    //...
    script() { 
        // <script src = '**.js'>
        this.f12();
    }
    f12() {
        
        this.doPean = function () {
            console.log('this指向：', this);
        }

        doPean();
        // window.doPean();
        // this.doPean();

        var obj = {
            doPean: function () {
                console.log('this指向：', this);
            }
        }
        obj.doPean();

        // obj.doPean.bind
        // obj.doPean.apply
        // obj.doPean.call

        var obj3 = { name: 'obj3'}
        obj.doPean.apply(obj3);
        obj.doPean.call(obj3);

        // 底层原理：
        obj3.doPean = obj.doPean;
        obj3.doPean();
        delete obj3.doPean;

        
        // bind

        // new
        
        // 箭头函数



    }
}

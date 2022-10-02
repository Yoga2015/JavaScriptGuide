<script>
        //测试事件队列与任务队列优先级
    console.log("===同步从这里开始===")
        setTimeout(function() {
        //异步宏任务
        let now = (new Date()).getTime(); //设定当前时间

    while ((new Date()).getTime() - now < 1000) { } //暂停五秒
    console.log("setTimeout[1]")
        }, 0)

        setTimeout(() => {
        //异步宏任务
        console.log("setTimeout[2]")
    }, 0)

        const p = new Promise((resolve, reject) => {
        //异步微任务
        resolve("resolve success");

        })
        p.then((data) => {
        console.log(data)
    })

    const bt = document.getElementById('bt');
        //事件任务
        bt.addEventListener('click', () => {
        console.log("点了一下")
    })

    function wait() {
        let now = (new Date()).getTime(); //设定当前时间
    while ((new Date()).getTime() - now < 1000) { } //暂停一秒
    console.log("wait end")
        }
    wait();
    console.log("===同步代码结束===")
</script>

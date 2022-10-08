/**
 * 事件监听 :采用事件驱动模式。
 * 异步任务的执行不取决于代码的顺序，而取决于某个事件是否发生。
 */


f1.on('done', f2);

function f1() { 
    setTimeout(function () {
        f1.trigger('done');
    }, 1000);
};
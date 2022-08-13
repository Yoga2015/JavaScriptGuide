window.onload = function () {
    page({
        //分页条容器
        id: 'div1',
        //当前页面
        nowNum: 7,
        //总页数
        allNum: 10,
        //点击页码时执行的回调函数
        callBack: function (now, all) {

            // alert('当前页:' + now +',总共页:'+all);

        }

    });

};

function page(opt) {
    //如果传入的对象里没有id号直接返回false
    if (!opt.id) { return false };
    //获取id所对应的容器
    var obj = document.getElementById(opt.id);

    //如果没有传入当前页,默认为第1页
    var nowNum = opt.nowNum || 1;
    //如果没有传入总共多少页，默认为5页
    var allNum = opt.allNum || 5;
    //如果没有传入回调函数,默认为1个空的函数
    var callBack = opt.callBack || function () { };

    //显示"首页",如果当前页大于等于4，而且总页数大于等于6
    if (nowNum >= 4 && allNum >= 6) {
        //创建a标签 
        var oA = document.createElement('a');
        //添加href的值
        oA.href = '#1';
        //添加内容
        oA.innerHTML = '首页';
        //添加到obj中
        obj.appendChild(oA);

    }

    //显示"上一页",如果当前页大于等于2
    if (nowNum >= 2) {
        //创建a标签 
        var oA = document.createElement('a');
        //添加href的值
        oA.href = '#' + (nowNum - 1);
        //添加内容
        oA.innerHTML = '上一页';
        //添加到obj中
        obj.appendChild(oA);
    }


    //如果传入的总页数小于等于5
    if (allNum <= 5) {
        //循环
        for (var i = 1; i <= allNum; i++) {
            //创建A标签 
            var oA = document.createElement('a');
            //为每个a标签赋值href值
            oA.href = '#' + i;
            //如果标签页为当前页
            if (nowNum == i) {
                //内容为i
                oA.innerHTML = i;

                //否则
            } else {
                //内容为[i]
                oA.innerHTML = '[' + i + ']';
            }
            //将标签页添加到容器当中
            obj.appendChild(oA);
        }
        //如果传入的总页数大于等于5
    } else {
        //循环
        for (var i = 1; i <= 5; i++) {
            //创建A标签 
            var oA = document.createElement('a');

            //如果当前页为第1页或是第2页时(不能让其显示第-1页和第0页)
            if (nowNum == 1 || nowNum == 2) {
                //标签的href值为#i(1,2,3,4,5,)
                oA.href = '#' + i;
                //如果标签页为当前页
                if (nowNum == i) {
                    //内容为i
                    oA.innerHTML = i;

                    //否则
                } else {
                    //内容为[i]
                    oA.innerHTML = '[' + i + ']';
                }
                // 如果总页数减去当前页等于0或者等于1(不能让其显示第11和12页)
            } else if ((allNum - nowNum) == 0 || (allNum - nowNum) == 1) {
                //标签页的href值为allNum - 5 + i(当前页为10，href值为#6,#7,#8,#9,#10)
                oA.href = '#' + (allNum - 5 + i);

                //如果总页数减去当前页为0以及当前循环遍历的i为5
                if ((allNum - nowNum) == 0 && i == 5) {
                    //标签页的内容为allNum - 5 + i(当前页为10，显示[6],[7],[8],[9],10)
                    oA.innerHTML = (allNum - 5 + i);

                    //否则,如果总页数减去当前页为1以及当前循环遍历的i为4
                } else if ((allNum - nowNum) == 1 && i == 4) {
                    //标签页的内容为allNum - 5 + i(当前页为9，显示[6],[7],[8],9,[10])
                    oA.innerHTML = (allNum - 5 + i);
                    //否则
                } else {
                    //标签页的内容为allNum - 5 + i(正常显示，没有第11页和第12页)
                    oA.innerHTML = '[' + (allNum - 5 + i) + ']';
                }

            } else {
                //5个标签页的href值依次为当前页-3加上i(1,2,3,4,5)
                oA.href = '#' + (nowNum - 3 + i);
                //如果当前页在5个标签页的中间
                if (i == 3) {
                    //内容为nowNum - 3 + i
                    oA.innerHTML = (nowNum - 3 + i);
                } else {
                    //否则,内容为[nowNum - 3 + i]
                    oA.innerHTML = '[' + (nowNum - 3 + i) + ']';
                }
            }
            //将标签页添加到容器当中
            obj.appendChild(oA);

        }

    }
    //显示"下一页",总页数减去当前页大于等于1，即不是最后一页
    if ((allNum - nowNum) >= 1) {
        //创建A标签 
        var oA = document.createElement('a');
        //给href赋值
        oA.href = '#' + (nowNum + 1);
        //添加内容
        oA.innerHTML = '下一页';
        //加入obj中
        obj.appendChild(oA);
    }

    //显示"尾页",总页数减去当前页大于等于3时
    if ((allNum - nowNum) >= 3 && allNum >= 6) {
        //创建A标签 
        var oA = document.createElement('a');
        //给href赋值
        oA.href = '#' + allNum;
        //添加内容
        oA.innerHTML = '尾页';
        //加入obj中
        obj.appendChild(oA);

    }

    //执行回调函数,传入当前页和总页数
    callBack(nowNum, allNum);

    //获取所有的a标签 
    var aA = obj.getElementsByTagName('a');

    //为每个标签页添加击事件
    for (var i = 0; i < aA.length; i++) {
        aA[i].onclick = function () {
            //获取当前页的href属性去#号由字符串转数字类型
            var nowNum = parseInt(this.getAttribute('href').substring(1));
            //清空当前的obj内容
            obj.innerHTML = '';

            //配置page的参数
            page({

                id: opt.id,
                nowNum: nowNum,
                allNum: allNum,
                callBack: callBack

            });
            //阻止默认，防止在URL中添加字符串
            return false;

        };
    }

}
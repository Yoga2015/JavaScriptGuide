$(function () {
    //1、全选、全不选功能模块
    //（1）里面3个小的复选框按钮（j - checkbox）的选中状态（checked）跟着全选按钮（checkall）走。
    //（2）因为 checked 是复选框的固有属性，此时我们需要利用 prop方法 获取 和 设置 该属性。
    //（3）把全选按钮（checkall）状态赋值给3个小的复选框按钮就可以了。

    // 事件可以使用 change
    $(".checkall").change(function () {
        // console.log($(this).prop("checked")); //先获取全选按钮然后判断它的状态

        // 把全选按钮（checkall）状态赋值给3个小的复选框按钮 即可
        $(".j-checkbox,.checkall").prop("checked", $(this).prop("checked"));

    });

    // 2、购物车案例模块 - 全选分析2
    // （1）当我们每次点击小的复选框按钮，就来判断:
    // （2）如果小复选框被选中的个数等于3，就应该把全选按钮选上，否则全部按你不选。
    // 注意：实际开发中 这个 3 不能这么写死

    $(".j-checkbox").change(function () {
        // if (被选中的小的复选框的个数 === 3) {  //注意：实际开发中 这个 3 不能这么写死
        
        // if (被选中的小的复选框的个数 === 整个小复选框的个数) {
        //     如果相等，就要选中全选按钮
        // } else {
        //     如果不相等，不要选中全选按钮
        // }
        // console.log($(".j-checkbox:checked").length);  //3

        // $(".j-checkbox").length 这个是所有的小复选框的个数
        if ($(".j-checkbox:checked").length === $(".j-checkbox").length) {
            $(".checkall").prop("checked", "checked");
        } else {
            $(".checkall").prop("checked", "");
        }

    });
})
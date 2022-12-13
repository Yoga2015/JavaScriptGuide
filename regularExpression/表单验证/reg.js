window.onload = function () {
  // 1、先设置 所有用到的正则表达式，每设置一个正则表达式就赋值给一个新的变量
  let regtel = /^1[3|4|5|7|8]\d{9}$/;    //手机号码的正则表达式
  let regqq = /^[1-9]\d{4,}$/;       //腾讯QQ号是从 10000开始的，1之后至少 4位数，以后会更多
  let regnc = /^[\u4e00-\u9fa5]{2,16}$/;  //昵称是中文，所以我们输入的是汉字
  let regmsg = /^\d{6}$/;    //短信验证 为6位数字
  let regpwd = /^[a-zA-Z0-9_-]{6,16}$/;  //登录密码
  let regsurepwd = /^[a-zA-Z0-9_-]{6,16}$/;   //确认密码


  //2、获取 所有input表单元素的值
  let tel = document.querySelector('#tel');
  let qq = document.querySelector('#qq');
  let nc = document.querySelector('#nc');
  let msg = document.querySelector('#msg');
  let pwd = document.querySelector('#pwd');
  let surepwd = document.querySelector('#surepwd');

  // 4、每传入一个就进行调用以下
  regexp(tel, regtel);   //手机号码号
  regexp(qq, regqq);   //QQ号
  regexp(nc, regnc);   //昵称
  regexp(msg, regmsg);   // 短信验证
  regexp(pwd, regpwd);
  // regexp(surepwd, regsurepwd);  //确认密码无需正则校验，只需和登录密码对比校验

  //3、声明一个表单验证函数，专门用来处理 所有input表单元素的值是否符合格式
  function regexp(ele, reg) {
    ele.onblur = function () {
      if (reg.test(this.value)) {
        // console.log('正确的');
        this.nextElementSibling.className = 'success';
        this.nextElementSibling.innerHTML = '<i class="success_icon"></i>恭喜您输入正确';
      } else {
        // console.log('错误的');
        this.nextElementSibling.className = 'error';
        this.nextElementSibling.innerHTML = '<i class="error_icon"></i>格式不正确，请重新输入';
      }
    }
  }

  surepwd.onblur = function () {
    if (pwd.value == this.value) {
      this.nextElementSibling.className = 'success';
      this.nextElementSibling.innerHTML = '<i class="success_icon"></i>恭喜您输入正确';
    } else {
      this.nextElementSibling.className = 'error';
      this.nextElementSibling.innerHTML = '<i class="error_icon"></i>格式不正确，请重新输入';
    }
  }

}
# day07
# 关于反馈
  希望老师别再打错别字了
  都是老师讲的时候能听懂,也能跟的上老师的节奏,但是让自己写思路很明显跟不上
  ,现在感觉自己写的html静态页面可能只能实现页面上显示的效果
  ,但是如果再去写JS代码的时候,可能会完全推翻自己的html页面.求解.
  解: 为什么写js时会大量的改html.
  老师太棒了，么么哒
  老师再仔细串串 这一块呗
  老师讲的棒棒的 就是一天下来有点多 需要慢慢消化
  老师,感觉学习到了高原期, 近两天特别烦躁,怎么破?
  > 

  编辑讲师这一块不怎么懂，明天先屡屡
  需要把tc_id传递给编辑页面，然后再在编辑页面，获取这个tc_id,根据它获取数据，并呈现到页面!

  慢慢来吧
  辛苦，谢谢！ 
  ...
  原理基本清楚，自己动手还有问题
  日历插件如何汉化
  
## 今日目标
## jquery表单验证插件
- jquery-validation
- `npm install jquery-validation`
- 使用

```js
  $('form').validate({
    submitHandler: function () {
      // 当表单验证全部通过时执行
      alert('通过了')
    },
    // 指定对于表单控制的验证规则
    rules: {
      // key是要验证的表单控制的name值
      tc_name: {
        // required: true 表示如果 tc_name对应的表单值为空的话，不能提交
        required: true,
        minlength: 6,
        maxlength: 12
      },
      tc_email: {
        required: true,

        // 会验证tc_email中输入的是否是邮箱
        email: true
      },
      tc_date:{
        required: true,
        date: true // 要求tc_date中的内容是日期的格式
      }
    },
    // 用来定制提示信息
    messages: {
      // key是对应表单的的name属性值
      tc_name: {
        required: '用户名不能为空',
        minlength: '用户名不能小于6位',
        maxlength: '用户名不能大于12位'
      },
      tc_email: {
        required: '邮箱不能为空',
        email: '邮箱格式不对，需要包含一个@符号'
      }
    }
  })
```

验证规则有: 
  1	required:true	必须输入的字段。
  2	remote:"check.php"	使用 ajax 方法调用 check.php 验证输入值。
  3	email:true	必须输入正确格式的电子邮件。
  4	url:true	必须输入正确格式的网址。 http://www.baidu.com
  5	date:true	必须输入正确格式的日期。日期校验 ie6 出错，慎用。
  6	dateISO:true	必须输入正确格式的日期（ISO），例如：2009-06-23，1998/01/22。只验证格式，不验证有效性。
  7	number:true	必须输入合法的数字（负数，小数）。
  8	digits:true	必须输入整数。
  9	creditcard:	必须输入合法的信用卡号。
  10	equalTo:"#field"	输入值必须和 #field 相同。
  11	accept:	输入拥有合法后缀名的字符串（上传文件的后缀）。
  12	maxlength:5	输入长度最多是 5 的字符串（汉字算一个字符）。
  13	minlength:10	输入长度最小是 10 的字符串（汉字算一个字符）。
  14	rangelength:[5,10]	输入长度必须介于 5 和 10 之间的字符串（汉字算一个字符）。
  15	range:[5,10]	输入值必须介于 5 和 10 之间。
  16	max:5	输入值不能大于 5。
  17	min:10	输入值不能小于 10。

## jquery表单提交插件
> 专用用来提交表单，可以用来代替jquery的ajax方法
> $('form').submitForm(options)
> 下载: `npm install jquery-form`
> 使用: 
1.引包
调用:
```js
// ajaxSubmit会异步将表单的数据自动发给后端
// $().ser
// ajaxSubmit方法与ajax方法 发ajax请求时区别在于,
// 这个方法会自动获取表单中的数据，发给后端 ，ajax方法需要我们自己去获取数据!
$('form').ajaxSubmit({
        url: '/api/teacher/add',
        type: 'post',
        // data: {xxxxx: 'hello'}, 可以使用data, 添加的data中的数据也会被发给后端
        success: function (data) {
          $('form')[0].reset()
        }
})
```

## 修改密码


## jquery uploadify
> 上传文件插件  
> 用来上传文件给后端  
1. 在引入jquery和 jquery-uploadify.js
2. 在html中添加一个input
```html
  <input id="upload" type="file" name="test" >
```
3. 在js中添加如下代码
  ```js
  $("#upload").uploadify({
      height        : 30,
      // 设置用来设置接口文档中要求的参数名key
      fileObjName: 'tc_avatar',
      // swf 是需要引入的flash文件，要改成自己网站的路径
      swf           : '/uploadify/uploadify.swf',

      // 是指定接口文档中指定的上传文件的地址!
      uploader      : '/uploadify/uploadify.php',
      width         : 120
  });
  ```
4. 前三步做了之后，在页面选择一个文件，选择后，插件会自动把文件上传给服务器.


// FormDate html5提供的可以配合ajax上传文件的对象



## 总结
- 使用的新插件
  *注意，切记要引包，下载包*
  + 日期插件的汉化, 引入对应中文的js, 添加 langulage: 'zh-CN'属性
  + 表单验证插件: jquery-validation
    * $().validate({
      submitHandler: function () {// 表单提交时，如果验证通过，会执行这个函数}
      rules: 指定规则
      messages: 指定规则对应的提示
    })
  + 表单提交插件: jquery-form
    $('form').ajaxSubmit({
      可以不写data,也可以写,
      自己会自动获取表单中的数据, *表单中的input一定要写name*
    })

  + 文件上传插件 jquery-uploadify
  ```js
  // 设置之后，一旦我们选择了文件之后，就会自动将文件上传给后端
   $(选择input)..uploadify({
      // 文件上传成功的回调函数
      onUploadSuccess: function (file, data) {
        var obj = JSON.parse(data)
        $('#upfileimg').attr('src', obj.result.path)
      },
      // fileObjName设置用来设置接口文档中要求的参数名key
      fileObjName: 'tc_avatar',
      // flash代码文件，用来上传文件用的
      swf: '/assets/js/libs/uploadify.swf',
      // http://api.botue.com/uploader/avatar
      // uploader 是指定接口文档中，上传文件用的地址
      'uploader': '/api/uploader/avatar'
    })
  ```
  
  + 今天做了什么功能?
  1.修改密码
  2.个人中心

## 环境
<!--找我-->

<!--坚持-->
<!--信心-->
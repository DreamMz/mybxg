//需求 点击登陆跳转
// $("form").on("submit", function(e) {
//     // return false;  阻止默认事件
//     e.preventDefault();
//     var name = $("#name").val();
//     var pass = $("#pass").val();

//     if (!name.trim() || !pass.trim()) {
//         alert("用户名或密码不能为空!");
//     };
//     var obj = {
//         url: "http://localhost.com/api/login",
//         // http://localhost.com/api/login
//         type: "post",
//         data: {
//             tc_name: name,
//             tc_pass: pass
//         },

//         success: function(data) {
//             console.log(1);
//             console.log(data);
//             if (data.code === 200) {
//                 alert("登陆成功");
//             }
//         },
//         error: function() {
//             console.log(error);
//         }
//     };
//     $.ajax(obj);

// $.ajax({
//     url: "http://localhost.com/api/login",
//     // http://localhost.com/api/login
//     type: "post",
//     data: {
//         tc_name: name,
//         tc_pass: pass
//     },

//     success: function(data) {
//         console.log(1);
//         console.log(data);
//         if (data.code === 200) {
//             alert("登陆成功");
//         }
//     },
//     error: function() {
//         console.log(error);
//     }
// })
// })

define(["jquery", "cookie"], function($) {


    $("form").on("submit", function(e) {
        e.preventDefault();
        var name = $("#name").val();
        var pass = $("#pass").val();

        if (!name.trim() || !pass.trim()) {
            alert("用户名或密码不能为空");
        }
        var obj = {
            url: "http://localhost.com/api/login",
            type: "post",
            data: {
                tc_name: name,
                tc_pass: pass
            },
            success: function(data) {

                if (data.code === 200) {
                    // alert("登陆成功");
                    // $.cookie("userinfo", JSON.stringify(data.result), {
                    //     expires: 7,
                    //     path: "/"
                    // });
                    console.log(data);
                    window.location.href = "http://localhost.com/view/index-a/index.html";
                }
            },
            error: function() {
                alert(登陆错误);
            }
        }
        $.ajax(obj);

    })
})
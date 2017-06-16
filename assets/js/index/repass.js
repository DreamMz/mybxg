define(["jquery", "validation", "form"], function($) {
    $.validator.addMethod("confirm", function() {
        var newPass = $("input[name='tc_new_pass']").val();
        var confirmPass = $("input[name='tc_confirm_pass']").val();
        return newPass === confirmPass
    }, "两次密码不一致")


    $('form').validate({
        submitHandler: function() {
            // 表单验证通过之后执行
            alert('成功通过');
            $("form").ajaxSubmit({
                url: "/api/teacher/repass",
                type: "post",
                success: function(data) {
                    if (data.code == 200) {
                        alert("修改成功")
                    }
                }

            })
        },
        rules: {
            tc_pass: {
                required: true,
                rangelength: [5, 10]
            },
            tc_new_pass: {
                required: true,
                rangelength: [5, 10]
            },
            tc_confirm_pass: {
                required: true,
                confirm: true
            }

        },
        messages: {
            tc_pass: {
                required: "密码不能为空",

            },
            tc_new_pass: {
                required: "新密码不能为空",

            },
            tc_confirm_pass: {
                required: "密码不能为空",

            }
        }


    })

})
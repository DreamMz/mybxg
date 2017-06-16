define(["jquery", "template", "locales", "uploadify", "validation"], function($, template) {
    var option = {
        url: "/api/teacher/profile",
        type: "get",
        success: function(data) {

            if (data.code == 200) {
                console.log(1);
                var result = template("temp-center", data.result);
                $('form').html(result);
                foo();
            }
        }
    }
    $.ajax(option);
    // 初始化
    function foo() {
        //添加头像  初始化文件
        $("#upfile").uploadify({
                onUploadSuccess: function(file, data) {
                    var obj = JSON.parse(data);
                    console.log(obj)
                    $("#upfileimg").attr("src", obj.result.path);
                },
                "fileObjName": "tc_acatar",
                "swf": "/assets/js/libs/uploadify.swf",
                "uploader": "/api/uploader/avatar"
            })
            //日期插件初始化
        $("input[name='tc_join_date']").datepicker({
                format: "yyyy/mm/dd",
                language: "zh-CN"
            })
            //做表单验证
        $("form").validate({
            submitHandler: function() {
                $("form").ajaxSubmit({
                    url: "/api/teacher/modeify",
                    type: "post",
                    data: { tc_id: 1 },
                    success: function(data) {
                        if (data.code == 200) {
                            alert("修改成功!")
                        }
                    }
                })
            },
            rules: {
                tc_roster: {
                    required: true
                },
                tc_birthday: {
                    required: true
                },
                tc_cellphone: {
                    required: true
                },
                tc_email: {
                    required: true,
                    email: true
                },
                tc_join_date: {
                    required: true,
                    date: true
                },
                tc_introduce: {
                    required: true
                },
            },
            messages: {
                tc_roster: {
                    required: "内容不能为空"
                },
                tc_birthday: {
                    required: "内容不能为空"
                },
                tc_cellphone: {
                    required: "内容不能为空"
                },
                tc_email: {
                    required: "内容不能为空",
                    email: "内容格不正确"
                },
                tc_join_date: {
                    required: "内容不能为空",
                    date: "时间格式不正确"
                },
                tc_introduce: {
                    required: "内容不能为空"
                },
            },

        })
    };



})
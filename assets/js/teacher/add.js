define(["jquery", "datepicker", "locales", "validation", "form"], function($, datepicker) {
    $('input[name="tc_join_date"]').datepicker({ format: 'yyyy/mm/dd' })
        // $(".tc-add").on('click', function() {
        //     var obj = {};
        //     obj.tc_pass = $('input[name="tc_pass"]').val();
        //     obj.tc_name = $('input[name="tc_name"]').val();
        //     obj.tc_join_date = $('input[name="tc_join_date"]').val(); //入职时间
        //     obj.tc_type = $('select[name="tc_type"]').val();
        //     obj.tc_gender = $("input[name='tc_gender']:checked").val();
        //     var option = {
        //         url: '/api/teacher/add',
        //         data: obj,
        //         type: "post",
        //         success: function(data) {
        //             console.log(data);
        //             $("form")[0].reset();
        //         }
        //     }
        //     $.ajax(option);

    // })
    $("form").validate({
        submitHandler: function() {
            alert(11);
            $("form").ajaxSubmit({
                url: "/api/teacher/add",
                type: "post",
                success: function(data) {
                    alert(1111);
                    $("form")[0].reset();
                }
            })
        },
        rules: {
            tc_name: {
                required: true,
                minlength: 4,
                maxlength: 10
            },
            tc_pass: {
                required: true,
                rangelength: [5, 10]
            },
            tc_join_data: {
                required: true,
                date: true
            }
        },
        messages: {
            tc_name: {
                required: '用户名不能为空',
                minlength: '长度不能小于4',
                maxlength: '长度不能大于10'
            },
            tc_join_date: {
                required: '日期不能为空',
                date: '必需是日期的格式'
            },
            tc_pass: {
                required: '不能为空',
                rangelength: '长度是5-10之间'
            }
        }
    })
})
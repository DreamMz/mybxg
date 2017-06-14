define(["jquery", "datepicker"], function($, datepicker) {
    $('input[name="tc_join_date"]').datepicker({ format: 'yyyy/mm/dd' })
    $(".tc-add").on('click', function() {
        var obj = {};

        obj.tc_name = $('input[name="tc_name"]').val();
        obj.tc_join_date = $('input[name="tc_join_date"]').val(); //入职时间
        obj.tc_type = $('select[name="tc_type"]').val();
        obj.tc_gender = $("input[name='tc_gender']:checked").val();
        var option = {
            url: '/api/teacher/add',
            data: obj,
            type: "post",
            success: function(data) {
                console.log(data);
                $("form")[0].reset();
            }
        }
        $.ajax(option);

    })
})
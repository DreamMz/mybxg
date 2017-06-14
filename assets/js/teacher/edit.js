define(["jquery", "template", "datepicker"], function($, template, datepicker) {
    getDataShow();
    savaDate()

    function getId() {
        var locationMsg = location.search;
        var arr = locationMsg.slice(1).split("&")
        console.log(arr);
        var locationid = arr.length > 1 ? fn1(arr) : fn2(arr);

        function fn1(arr) {
            var obj = {};
            arr.forEach(v => {
                obj[v.split("=")[0]] = v.split("=")[1];
                return obj;
            });
            return obj;
        };

        function fn2(arr) {
            var obj = {};
            // 判断=是否有arr[1]
            (arr[0].split("=")[1]) ? (obj[arr[0].split("=")[0]] = arr[0].split("=")[1]) : (obj = {});
            return obj
        }
        return locationid;
    }

    function getDataShow() {
        var obj = getId();
        var options = {
            url: "/api/teacher/edit",
            data: {
                tc_id: obj.tc_id,
            },
            type: "get",
            success: function(data) {
                var html = template("temp-edit", data.result);
                $("form").html(html);
                $('.tc-date').datepicker({
                    format: "yyyy/mm/dd",
                })
            }
        }
        $.ajax(options);
    }

    function savaDate() {
        $("form").on("click", ".save", function() {
            var obj = {};
            obj.tc_id = getId().tc_id;
            obj.tc_name = $('input[name="tc_name"]').val();
            obj.tc_join_date = $('input[name="tc_join_date"]').val(); //入职时间
            obj.tc_type = $('select[name="tc_type"]').val();
            obj.tc_gender = $("input[name='tc_gender']:checked").val();
            var option = {
                url: "/api/teacher/update",
                data: obj,
                success: function(data) {
                    if (data.code == 200) {
                        alert("success!");
                    }
                }
            }
            $.ajax(option);
        })
    }
})
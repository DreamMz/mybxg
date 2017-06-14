define(["jquery", "template", "bootstrap"], function($, template) {
    template.defaults.imports.getAge = function(value) {
        var birthYear = new Date(value).getFullYear();
        var nowYear = new Date().getFullYear();
        return nowYear - birthYear;
    }
    var option = {
        url: "/api/teacher",
        success: function(data) {
            if (data.code == 200) {
                var result = template("temp-list", { list: data.result })

                $("#list").html(result);
            }
        }
    }
    $.ajax(option);

    $("#list").on("click", "#showmodal", function() {
        $("#teacherModal").modal();
        var tc_id = $(this).closest("tr").attr("data-listId");
        var option = {
            url: "/api/teacher/view",
            data: { tc_id: tc_id },
            success: function(data) {
                // console.log(1);
                // console.log(data.result);
                console.log(data.code);
                if (data.code == 200) {
                    var lista = data.result
                        // console.log(list);
                    console.log(lista);
                    var htmla = template("tempInfo", lista);
                    console.log(htmla);
                    $("#modal-list").html(htmla);

                }
            }
        }
        $.ajax(option);

    })


    // 注销功能
    $("#list").on("click", ".tc-status", function() {
        console.log(1);
        var $this = $(this);
        var tc_status = $this.attr("status");
        var tc_id = $this.closest("tr").attr("data-listId")

        var option = {
            url: "/api/teacher/handle",
            type: "post",
            data: {
                tc_id: tc_id,
                tc_status: tc_status
            },
            success: function(data) {
                if (data.code == 200) {
                    var str = "";
                    str = data.result.tc_status === 1 ? "启用" : "注销";
                    $this.html(str);
                    $this.attr("status", data.result.tc_status)
                }
            }

        }
        $.ajax(option);
    })
})
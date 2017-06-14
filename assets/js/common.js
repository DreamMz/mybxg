define(["jquery", "cookie", "nprogress"], function($, x, NProgress) {
    NProgress.start();


    $(document).ajaxStart(function() {
        NProgress.start();
    })
    $(document).ajaxStop(function() {
        NProgress.done();
    })

    var sessionId = $.cookie("PHPSESSID");
    if (!sessionId) {
        window.location.href = "/view/index-a/login.html"
        return;
    }
    var info = JSON.parse($.cookie("userinfo") || {});
    $(".profile img").attr("src", info.tc_avatar);
    $(".profile h4").text(info.tc_name);


    $(".navs>ul>li>a").on("click", function() {
        $(this).next("ul").slideToggle();
    })
    $(".header .fa-sign-out").closest("a").on("click", function() {
        var option = {
            url: "/api/logout",
            type: "post",
            success: function(data) {
                if (data.code == 200) {
                    window.location.href = "/view/index-a/login.html";
                    alert(data.msg);
                }
            }
        }
        $.ajax(option);
    })
    NProgress.done();
})
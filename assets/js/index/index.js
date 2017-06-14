define(["jquery", "cookie", "nProgress"], function($, x, nProgress) {
    nProgress.start();
    var info = JSON.parse($.cookie("userinfo"));


    $(".profile img").attr("src", info.tc_avatar);
    $(".profile h4").text(info.tc_name);

    nProgress.done();
})
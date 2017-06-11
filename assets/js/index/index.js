define(["jquery", "cookie"], function($) {

    var info = JSON.parse($.cookie("userinfo"));


    $(".profile img").attr("src", info.tc_avatar);
    $(".profile h4").text(info.tc_name);
})
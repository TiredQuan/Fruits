
$(document).ready(function () {

    $(".nav_main_menu li a").click(function (e) {
        $(".nav_main_menu li a").parent().removeAttr("class");
        $(this).parent().addClass("active");
    });

    $(".btn_nav_mobile").click(function (e) {
        e.preventDefault();
        $(".nav_mobile").addClass("active");

    });
    $(".btn_close").click(function (e) {
        e.preventDefault();
        $(".nav_mobile").removeClass("active");
    });



    $(".nav_mobile").click(function (e) {
        e.preventDefault();
        e.stopPropagation();
        if (e.target == $(this)[0]) {
            $(this).removeClass("active");
        }
    });

    $("#search_icon").click(function () {
        $(this).toggleClass("active");
        $(".header_form_search").fadeToggle();
    });

    $("#btn_user").click(function (e) {
        e.preventDefault();
        e.stopPropagation();
        $(".user_mobile").fadeToggle();
    });
    $("#cart_icon").click(function (e) {
        e.preventDefault();
        e.stopPropagation();
        $(".cart_box").addClass("active");
    });
    $("#close_cart").click(function (e) {
        e.preventDefault();
        e.stopPropagation();
        $(".cart_box").removeClass("active");
    });
    $(".cart_box").click(function (e) {
        e.preventDefault();
        e.stopPropagation();
        if (e.target == $(this)[0]) {
            $(this).removeClass("active");
        }
    });
    $(".btn_nav_shop").click(function (e) {
        e.preventDefault();
        e.stopPropagation();
        $(".cart_box").addClass("active");
    });
    $(".minus").click(function (e) {
        e.preventDefault();
        e.stopPropagation();
        if ($(this).next().val() > 1) {
            $(this).next().val(+$(this).next().val() - 1);
        }

    });
    $(".plus").click(function (e) {
        e.preventDefault();
        e.stopPropagation();
        $(this).prev().val(+$(this).prev().val() + 1);
    });

    $("#user_icon").click(function (e) {
        $(this).toggleClass("active");
        $(".nav_user").fadeToggle();
    })
});
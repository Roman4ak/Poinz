
$(function () {
    $('.header__burger').click(function (event) {
        $(this).toggleClass('header-burger-active');
        $('.header__wrapper').slideToggle();
    });
})

$(function () {
    $(window).scroll(function() {    
        var scroll = $(window).scrollTop();    
        if (scroll >= 100) {
            $(".header").addClass("header-shadow");
        }
    })
})




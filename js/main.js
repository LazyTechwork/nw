new WOW().init();
let htmlbody = $('html, body');
$(document).ready(() => {
    $('a[href^="#"]').click(function () {
        var href = $.attr(this, 'href');
        $('.navbar-collapse').collapse('hide');
        htmlbody.animate({
            scrollTop: $(href).offset().top - 50
        }, {
            duration: 500, easing: 'swing'
        });

        return false;
    });
});

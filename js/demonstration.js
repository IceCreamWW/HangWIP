(function ($) {
    $(window).on('resize',function(){location.reload();});
    $('#fullpage').fullpage();
    $('.depicts-list').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        asNavFor: '.thumbnails-list',
        draggable: false,
    });

    $(".thumbnails-list").slick({
        arrows: false,
        centerMode: true,
        infinite: false,
        slidesToShow: 5,
        focusOnSelect: true,
        swipeToSlide: true,
        asNavFor: '.depicts-list',
    });
})(jQuery);

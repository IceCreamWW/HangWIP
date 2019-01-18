(function ($) {
    document.addEventListener("fullscreenchange", function() {
        location.reload()
    });
    $('#fullpage').fullpage({
        onLeave: function(origin, destination, direction){
            if (destination.index === 1) {
                $(".thumbnails-list").slick('slickPlay');
            }
            if (origin.index === 1){
                $(".thumbnails-list").slick('slickPause');
            }
        }
    });
    $('.depicts-list').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        pauseOnHover: true,
        asNavFor: '.thumbnails-list',
        draggable: false,
    });

    $(".thumbnails-list").slick({
        arrows: false,
        centerMode: true,
        infinite: true,
        slidesToShow: 5,
        focusOnSelect: true,
        swipeToSlide: true,
        autoplay: false,
        autoplaySpeed: 2000,
        asNavFor: '.depicts-list',
    });
    $('.depict-image, .thumbnails-list').hover(
        function () {
            $(".thumbnails-list").slick('slickPause');
        },
        function () {
            $(".thumbnails-list").slick('slickPlay');
        }
    );
})(jQuery);

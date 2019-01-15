(function ($) {
    document.addEventListener("fullscreenchange", function() {
        location.reload()
    });
    $('#fullpage').fullpage();
    $('.depicts-list').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        asNavFor: '.thumbnails-list',
        draggable: false,
    });

    $('.depicts-list').on('beforeChange', function(event, slick, currentSlide, nextSlide){
        if ((currentSlide <= 1 && nextSlide <= 1) || (currentSlide > 1 && nextSlide > 1))
        {
            return;
        }
        if (nextSlide <= 1)
        {
            $(".name").fadeOut(200, function() {
                $(this).text("袋折り").fadeIn();
            });
            $(".intro").fadeOut(200, function() {
                $(this).text("この二つの折符に対して、袋折りはすべて最終まで陽の折りとなる。この袋折りでは、火の霊（火の霊は重く、下降し、安定である）を持っているから、それも、折符の最終形に向かって、ゆえに、安定させる正方形を作り上げるように基礎の部分となる。").fadeIn();
            });
        }
        else
        {
            $(".name").fadeOut(200, function() {
                $(this).text("指二本分のはばを残して").fadeIn(200);
            });
            $(".intro").fadeOut(200, function() {
                $(this).text("人差し指と中指という二本指を並べて、天地・陰陽・火と水など、この世界は二元相対・二元平衡という状態となっている。").fadeIn(200);
            });
        }
    });

    $(".thumbnails-list").slick({
        arrows: false,
        centerMode: true,
        infinite: false,
        slidesToShow: 4,
        focusOnSelect: true,
        swipeToSlide: true,
        asNavFor: '.depicts-list',
    });
})(jQuery);

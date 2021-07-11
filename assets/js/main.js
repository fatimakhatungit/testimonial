(function ($) {
"use strict";

    // data - background
        $("[data-bg]").each(function() {
            $(this).css("background-image", "url(" + $(this).attr("data-bg") + ")")
        });



        /*========================================
         #  Testimonial
         ========================================*/

        $('.testimonial-carousel').slick({
            slidesToShow: 1,
            dots: true,
            slidesToScroll: 1,
            arrows: false,
            autoplay: true,
            autoplaySpeed: 3000,
            initialSlide: 1,
        });

      




})(jQuery);	
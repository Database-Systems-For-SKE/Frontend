/* ==============================================
 equal height
 =============================================== */

jQuery(function ($) { // DOM is now read and ready to be manipulated
    equalheight = function (container) {
        var currentTallest = 0,
            currentRowStart = 0,
            rowDivs = [],
            $el,
            topPosition = 0;
        $(container).each(function () {

            $el = $(this);
            $($el).height('auto');
            topPostion = $el.position().top;

            if (currentRowStart !== topPostion) {
                for (currentDiv = 0; currentDiv < rowDivs.length; currentDiv++) {
                    rowDivs[currentDiv].height(currentTallest);
                }
                rowDivs.length = 0; // empty the array
                currentRowStart = topPostion;
                currentTallest = $el.height();
                rowDivs.push($el);
            } else {
                rowDivs.push($el);
                currentTallest = (currentTallest < $el.height()) ? ($el.height()) : (currentTallest);
            }
            for (currentDiv = 0; currentDiv < rowDivs.length; currentDiv++) {
                rowDivs[currentDiv].height(currentTallest);
            }
        });
    };

    $(window).load(function () {
        equalheight('.eq-blocks');
    });


    $(window).resize(function () {
        equalheight('.eq-blocks');
    });


    $('#datepicker').find('.input-daterange').datepicker({
        format: "dd/mm/yyyy",
        autoclose: true,
        toggleActive: true
    });
});


function main() {
    (function () {
        'use strict';
        /* ==============================================
         Testimonial Slider
         =============================================== */

        $('a.page-scroll').click(function () {
            if (location.pathname.replace(/^\//, '') === this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
                var target = $(this.hash);
                target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
                if (target.length) {
                    $('html,body').animate({
                        scrollTop: target.offset().top - 40
                    }, 900);
                    return false;
                }
            }
        });

        /*====================================
         Show Menu on Book
         ======================================*/
        $(window).bind('scroll', function () {
            var navHeight = $(window).height() - 100;
            if ($(window).scrollTop() > navHeight) {
                $('.navbar-default').addClass('on');
            } else {
                $('.navbar-default').removeClass('on');
            }
        });

        $('body').scrollspy({
            target: '.navbar-default',
            offset: 80
        });

        $(document).ready(function () {
            $("#team").owlCarousel({

                navigation: false, // Show next and prev buttons
                slideSpeed: 300,
                paginationSpeed: 400,
                autoHeight: true,
                itemsCustom: [
                    [0, 1],
                    [450, 2],
                    [600, 2],
                    [700, 2],
                    [1000, 3],
                    [1200, 3],
                    [1400, 3],
                    [1600, 3]
                ]
            });

            $("#clients").owlCarousel({

                navigation: false, // Show next and prev buttons
                slideSpeed: 300,
                paginationSpeed: 400,
                autoHeight: true,
                itemsCustom: [
                    [0, 1],
                    [450, 2],
                    [600, 2],
                    [700, 2],
                    [1000, 4],
                    [1200, 5],
                    [1400, 5],
                    [1600, 5]
                ]
            });

            $("#testimonial").owlCarousel({
                navigation: false, // Show next and prev buttons
                slideSpeed: 300,
                paginationSpeed: 400,
                singleItem: true
            });
        });


        /*====================================
         DATE PICKER
         ======================================*/

        $(function () {
            // $('#datetimepicker1').datetimepicker();
        });


        /*====================================
         Portfolio Isotope Filter
         ======================================*/
        $(window).load(function () {
            var $container = $('#lightbox');
            $container.isotope({
                filter: '*',
                animationOptions: {
                    duration: 750,
                    easing: 'linear',
                    queue: false
                }
            });
            $('.cat a').click(function () {
                $('.cat .active').removeClass('active');
                $(this).addClass('active');
                var selector = $(this).attr('data-filter');
                $container.isotope({
                    filter: selector,
                    animationOptions: {
                        duration: 750,
                        easing: 'linear',
                        queue: false
                    }
                });
                return false;
            });
        });
    }());
}
main();

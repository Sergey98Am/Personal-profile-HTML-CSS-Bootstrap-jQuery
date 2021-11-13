$(document).ready(function () {
    $('.icon').click(function () {
        // $(".icon").toggleClass("hide");
        $('.overlay-menu-content').addClass('active-overlay');
    });

    $('.overlay-menu-content ul li a').click(function () {
        // $(".icon").toggleClass("hide");
        $('.overlay-menu-content').removeClass('active-overlay');
    });

    $('.close-menu button').click(function () {
        // $(".icon").toggleClass("hide");
        $('.overlay-menu-content').removeClass('active-overlay');
    });

    $(window).on('scroll', function () {
        if ($(window).scrollTop() > 150) {
            $('.header .menu-icon').css({
                "background": "black"
            })
        } else {
            $('.header .menu-icon').css({
                "background": "transparent"
            })
        }
    })

    $('.slider').slick({
        infinite: true,
        speed: 300,
        slidesToShow: 4,
        prevArrow: '.third-section .prev-button',
        nextArrow: '.third-section .next-button',
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });

    $('.second-slider').slick({
        // infinite: true,
        slidesToShow: 5,
        // slidesToScroll: 3,
        dots: true,
        arrows: false,
    })

    $('.third-slider').slick({
        infinite: true,
        speed: 300,
        slidesToShow: 3,
        prevArrow: '.sixth-section .prev-button',
        nextArrow: '.sixth-section .next-button',
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });
});
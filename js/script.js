$(document).ready(function () {
    $('.icon').click(function () {
        $(".icon").addClass('is-active');
        $('.overlay-menu-content').addClass('active-overlay');
    });

    $('.overlay-menu-content ul li a').click(function () {
        $(".icon").removeClass('is-active');
        $('.overlay-menu-content').removeClass('active-overlay');
    });

    $('.close-menu button').click(function () {
        $(".icon").removeClass('is-active');
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

    let scrollLink = $('.scroll')

    scrollLink.click(function (e) {
        e.preventDefault();
        $('body, html').animate({
            scrollTop: $(this.hash).offset().top
        }, 1000)
    })

    $(window).scroll(function () {
        let scrollbarLocation = $(this).scrollTop();

        scrollLink.each(function () {
            let sectionOffset = $(this.hash).offset().top - 200

            if (sectionOffset <= scrollbarLocation) {
                $(this).addClass('active');
                $(this).siblings().removeClass('active');
                // let dot_link_before = window.getComputedStyle(document.querySelector('.dot-link'), ':before')
                let hash = this.hash
                changeColorDots(
                    hash,
                    '#fourth-section',
                    {'border-color': 'transparent'},
                    'add-before',
                    {'border-color': 'black'},
                    {'border-color': 'white'}
                )
            }
        })
    })

    $('.slider').slick({
        infinite: true,
        speed: 300,
        slidesToShow: 4,
        prevArrow: '.third-section .prev-button',
        nextArrow: '.third-section .next-button',
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 991,
                settings: {
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
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
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 4,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 991,
                settings: {
                    slidesToShow: 3
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 1,
                }
            }
        ]
    })

    $('.third-slider').slick({
        infinite: true,
        speed: 300,
        slidesToShow: 3,
        prevArrow: '.sixth-section .prev-button',
        nextArrow: '.sixth-section .next-button',
        responsive: [
            {
                breakpoint: 991,
                settings: {
                    slidesToShow: 2,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1
                }
            }
        ]
    });
});

function changeColorDots(hash, sectionName, style, newClass, firstStyle, secondStyle) {
    if (hash === sectionName) {
        $('.dot-link').css(style).addClass(newClass)
        $('.scroll-dots .active').css(firstStyle)
    } else {
        $('.dot-link').css(style).removeClass(newClass)
        $('.scroll-dots .active').css(secondStyle)
    }
}
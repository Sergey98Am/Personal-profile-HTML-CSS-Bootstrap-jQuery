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
                    '#third-section',
                    {'border-color': 'transparent'},
                    'add-before',
                    {'border-color': 'red'},
                    {'border-color': 'green'}
                )
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

function changeColorDots(hash, sectionName, style, newClass, firstStyle, secondStyle) {
    if (hash === sectionName) {
        $('.dot-link').css(style).addClass(newClass)
        $('.scroll-dots .active').css(firstStyle)
    } else {
        $('.dot-link').css(style).removeClass(newClass)
        $('.scroll-dots .active').css(secondStyle)
    }
}
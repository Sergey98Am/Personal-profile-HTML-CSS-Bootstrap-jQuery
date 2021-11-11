$(document).ready(function () {
    $('.slider').slick({
        infinite: true,
        speed: 300,
        slidesToShow: 4,
        prevArrow: '.prev-button',
        nextArrow: '.next-button',
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
});
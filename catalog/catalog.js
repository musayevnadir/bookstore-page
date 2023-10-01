/** @format */
const swiper = new Swiper(".swiper", {
    direction: "horizontal",
    loop: true,
    speed: 800,
    slidesPerView: 5,
    slidesPerGroup: 1,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    scrollbar: {
        el: ".swiper-scrollbar",
    },

    //   spaceBetween:10

    //   keyboard: {
    //     enabled: true,
    //     onlyInViewport: true,
    //   },

    //   ?--------------------
    //     simulateTouch: true,
    //     touchRatio: 1,
    //     touchAngle: 45,
    //     grabCursor: true,
    //   slideToClickedlide: true,
    //   ?--------------------

    //   ! RESPONSE Swipper

    breakpoints: {
        375: {
            slidesPerView: 1,
        },
        558: {
            slidesPerView: 2,
        },
        992: {
            slidesPerView: 5,
        },
    },
});

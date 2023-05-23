var swiper = new Swiper(".slide-content", {
    slidesPerView: 2,
    spaceBetween: 50,
    slidesPerGroup: 1,
    loop: true,
    grabCursor: true,
    centerSlide: true,
    fade: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
      dynamicBullets: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    breakpoints: {
        0: {
            slidesPerView: 1,
            spaceBetween: 50,
        },
        690: {
            slidesPerView: 2,
            spaceBetween: 50,
        },
    },
  });
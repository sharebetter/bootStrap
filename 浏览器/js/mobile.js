(function(){
    new Swiper('.swiper-container', {
        autoplay: false,
        speed: 500,
        autoplayDisableOnInteraction: false,
        effect: 'coverflow',
        loop: true,
        grabCursor: true,
        centeredSlides: true,
        slidesPerView: 'auto',
        loopedSlides: 3,
        spaceBetween: 10,
        coverflowEffect: {
          rotate: -20,
          stretch: 220,
          depth: 280,
          modifier: 1,
          slideShadows: true,
        },
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
        onInit: function (swiper) {
          swiper.slides[2].className = "swiper-slide swiper-slide-active";
        }
      });
})()
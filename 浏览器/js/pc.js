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
        spaceBetween: 100,
        coverflowEffect: {
          rotate: -20,
          stretch: 240,
          depth: 300,
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
    //   $(window).scroll(function () {
    //     if ($("#fixt-top").offset().top > 50) {
    //       $("#fixt-top").removeClass("fixt-top").addClass("fixt-top-show");
    //       $("#fixt-top .navbar-brand").html('<img src="img/icon-logo.png">')
    //     } else {
    //       $("#fixt-top").removeClass("fixt-top-show").addClass("fixt-top");
    //       $("#fixt-top .navbar-brand").html('<img src="img/icon-logo.png">')
    //     }
    //   })
})()
var swiperBanner = new Swiper('.swiper-banner', {
      spaceBetween: 30,
      slidesPerView: 1,
      loop: true,
      navigation: {
        nextEl: '.swiper-banner-button-next',
        prevEl: '.swiper-banner-button-prev'
      },
});

var swiperCards = new Swiper('.swiper-cards', {
      width: 1110,
      slidesPerView: 4,
      slidesOffsetAfter: 300,
      spaceBetween: 30,
      loop: true,
      navigation: {
        nextEl: '.swiper-cards-button-next'
      },
});

const textFields = [].map.call(document.querySelectorAll('.mdc-text-field'), function(el) {
  return new mdc.textField.MDCTextField(el);
});
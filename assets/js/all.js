"use strict";

var swiperBanner = new Swiper('.swiper-banner', {
  spaceBetween: 30,
  slidesPerView: 1,
  loop: true,
  navigation: {
    nextEl: '.swiper-banner-button-next',
    prevEl: '.swiper-banner-button-prev'
  }
});
var swiperCards = new Swiper('.swiper-cards', {
  width: 1050,
  slidesPerView: 4,
  slidesOffsetAfter: 300,
  spaceBetween: 30,
  loop: true,
  navigation: {
    nextEl: '.swiper-cards-button-next'
  },
  breakpoints: {
    768: {
      width: 1170
    },
    1200: {
      width: 1110
    }
  }
});
var swiperCards = new Swiper('.swiper-md-cards', {
  width: 780,
  slidesPerView: 3,
  slidesOffsetAfter: 300,
  spaceBetween: 30,
  loop: true,
  breakpoints: {
    768: {
      width: 690
    },
    1200: {
      width: 1110
    }
  }
});
var textFields = [].map.call(document.querySelectorAll('.mdc-text-field'), function (el) {
  return new mdc.textField.MDCTextField(el);
});
//# sourceMappingURL=all.js.map

var swiper = new Swiper('.swiper-container', {
      spaceBetween: 30,
      loop: true,
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
});

const textFields = [].map.call(document.querySelectorAll('.mdc-text-field'), function(el) {
  return new mdc.textField.MDCTextField(el);
});
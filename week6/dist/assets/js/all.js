"use strict";

$(".menu-icon").on("click", function (e) {
  e.preventDefault();
  $(".dropdown").toggleClass("active");
});
AOS.init({
  once: true,
  duration: 1000
});
//# sourceMappingURL=all.js.map

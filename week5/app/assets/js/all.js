const url = window.location.pathname;

$(".nav-link").each(function () {
  $(this).removeClass("active");
  if ($(this).attr("href") == url.split("/")[1]) {
    $(this).addClass("active");
  }
});

$(".dropdown").on("click", function() {
  $(this).toggleClass("active");
  $(".dropdown-items").toggleClass("active");
});
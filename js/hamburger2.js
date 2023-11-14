$("#js-hamburger").click(function () {
  $("#js-top-line").toggleClass("active");
  $("#js-center-line").toggleClass("active");
  $("#js-bottom-line").toggleClass("active");
  $("#js-nav").toggleClass("show");
});
$(".nav-item").click(function () {
  $("#js-top-line").removeClass("active");
  $("#js-center-line").removeClass("active");
  $("#js-bottom-line").removeClass("active");
  $("#js-nav").removeClass("show");
});
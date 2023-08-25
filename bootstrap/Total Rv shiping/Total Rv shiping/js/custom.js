$(document).ready(function () {
  $(".navbar-toggler").click(function () {
    $("header").toggleClass("header-bottom-bg");
  });
});
$(document).ready(function () {
  $(window).scroll(function () {
    if ($(window).scrollTop() > 50) {
      $("header").addClass("header-bg");
    } else {
      $("header").removeClass("header-bg");
    }
  });
});

$(".toggle-menu").on("click", function () {
  console.log("click");
  $(".nav-bar").toggleClass("show");
});

$(window).on("scroll", function () {
  if ($(window).scrollTop() > 50) {
    $(".header").addClass("active");
  } else {
    //remove the background property so it comes transparent again (defined in your css)
    $(".header").removeClass("active");
  }
});

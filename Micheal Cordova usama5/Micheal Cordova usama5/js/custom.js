$(".toggle-menu").on("click", function () {
  console.log("click");
  $(".nav-bar").toggleClass("show");
  $(".toggle-menu").toggleClass("crossicon");
});

$(".banner-quote-slider").slick({
  scenterMode: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  dots: false,
  arrows: false,
  autoplay: true,
  infinite: true,
});
$(".attorney-slider").slick({
  scenterMode: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  dots: true,
  arrows: false,
  autoplay: true,
  infinite: true,
});
$(".case-slider").slick({
  scenterMode: true,
  slidesToShow: 3,
  slidesToScroll: 3,
  dots: true,
  arrows: true,
  autoplay: true,
  infinite: true,
  prevArrow: "<img class='slick-prev' src='./images/resultsleft.png'>",
  nextArrow: "<img class=' slick-next' src='./images/resultsright.png'>",
  responsive: [
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
      },
    },
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        infinite: true,
        dots: false,
        arrows: false,
      },
    },
  ],
});
$(".about-slider").slick({
  scenterMode: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  dots: true,
  arrows: false,
  autoplay: true,
  infinite: true,
});

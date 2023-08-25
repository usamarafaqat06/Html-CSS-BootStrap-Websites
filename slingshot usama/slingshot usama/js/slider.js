$(".slider-content").slick({
    scenterMode: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: true,
    infinite: true,
    autoplay: true,
    customPaging: function (slider, i) {
        return '';
      }
  });
  $(document).ready(function() {
    var slider = $('.slider-right-content');
  
    slider.slick({
      scenterMode: true,
    slidesToShow: 2,
    slidesToScroll: 1,
    dots: true,
    infinite: false,
    autoplay: true,
    });
    $('#prevArrow').click(function() {
        slider.slick('slickPrev');
      });
    
      // Bind click event to next arrow button
      $('#nextArrow').click(function() {
        slider.slick('slickNext');
})
  })
  $(".logo-slider").slick({
    scenterMode: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    dots: false,
    arrows:false,
    infinite: true,
    autoplay: true,
    customPaging: function (slider, i) {
        return '';
      }
  });



  
  
  
  
  
  
  
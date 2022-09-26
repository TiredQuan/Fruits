
  $('.slick-slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000
});

$('.flash-slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    fade:true,
    autoplay: true,
    autoplaySpeed: 4000,
    dots:true,
    responsive: [
      {
        breakpoint: 1199,
        settings: {
          arrows: false,
        }
      },
      {
        breakpoint: 768,
        settings: {
          dots:false,
          arrows: false,
        }
      }
    ]
  
})
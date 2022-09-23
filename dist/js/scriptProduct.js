$(document).ready(function(){
    var sync1 = $(".product-gallery");
    var sync2 = $(".img-gallery");


    sync1.owlCarousel({
        items:1,
        rewind:true,
        autoplay:true,
        autoplayHoverPause:true,
        URLhashListener:true,
    });
    sync2.owlCarousel({
        items:6,
        rewind:true,
        autoplay:true,
        autoplayHoverPause:true,
        margin: 20,
    });

    sync2.on("click", ".owl-item", function(e){
        e.preventDefault();
        var number = $(this).index();
        sync1.data('owl.carousel').to(number, 300, true);
      });
  });




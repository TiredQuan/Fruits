$(document).ready(function(){
    var sync1 = $("#product-gallery");
    var sync2 = $("#img-gallery");

    
  var slidesPerPage = 6; //globaly define number of elements per page
  var syncedSecondary = true;

  sync1.owlCarousel({
    items:1,
    slideSpeed: 2000,
    URLhashListener:true,
    responsiveRefreshRate : 200,
  }).on('changed.owl.carousel', syncPosition);

  sync2
    .on('initialized.owl.carousel', function () {
      sync2.find(".owl-item").eq(0).addClass("current");
    })
    .owlCarousel({
    margin: 20,
    items : slidesPerPage,
    smartSpeed: 200,
    slideSpeed : 500,
    slideBy: slidesPerPage, //alternatively you can slide by 1, this way the active slide will stick to the first item in the second carousel
    responsiveRefreshRate : 100
  });

  function syncPosition(el) {
    //if you set loop to false, you have to restore this next line
    var current = el.item.index;

    sync2
      .find(".owl-item")
      .removeClass("current")
      .eq(current)
      .addClass("current");
    var onscreen = sync2.find('.owl-item.active').length - 1;
    var start = sync2.find('.owl-item.active').first().index();
    var end = sync2.find('.owl-item.active').last().index();
    
    if (current > end) {
      sync2.data('owl.carousel').to(current, 100, true);
    }
    if (current < start) {
      sync2.data('owl.carousel').to(current - onscreen, 100, true);
    }
  }
  
  function syncPosition2(el) {
    // if(syncedSecondary) {
      // var number = el.item.index;
      // sync1.data('owl.carousel').to(number, 100, true);
    // }
  }
  
  sync2.on("click", ".owl-item", function(e){
    e.preventDefault();
    var number = $(this).index();
    sync1.data('owl.carousel').to(number, 300, true);
  });
});



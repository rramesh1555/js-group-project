$(document).ready(function(){

  class items {
    items() { 
    }

    type = "";
    itemName = "";
    price = "";


  }


  $('.bxslider').bxSlider({
    auto:true,
    autoStart:true,
    infiniteLoop:true,
    pause: 2000
  });
  $('.specials').bxSlider({
    autoStart:true,
    minSlides: 1,
    maxSlides: 4,
    slideWidth: 265,
    slideMargin: 30,
    responsive: true
  });

  $("#menu-table").DataTable();

});
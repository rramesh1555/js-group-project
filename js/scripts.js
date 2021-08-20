$(document).ready(function(){

  
  var _items = [];

  let total= 0;

  class Item {
    constructor( type, itemName, price) { 
      this.type = type;
      this.itemName = itemName;
      this.price = price;
    }
    type = "";
    itemName = "";
    price = "";

    get type()  {
      return this.type;
    }

    get itemName()  {
      return this.itemName;
    }

    get price()  {
      return this.price;
    }
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

  $( "#menu-btn-1" ).on( "click", function( event ) {
    event.preventDefault();
    let a = $( "#menu-btn-1" ).val();
    var t = get(a);
    _items.push(get(a));
    updateCart(t, a);
  });

  $( "#menu-btn-2" ).on( "click", function( event ) {
    event.preventDefault();
    let a = $( "#menu-btn-2" ).val();
    var t = get(a);
    _items.push(get(a));
    updateCart(t);
  });

  $( "#menu-btn-3" ).on( "click", function( event ) {
    event.preventDefault();
    let a = $( "#menu-btn-3" ).val();
    var t = get(a);
    _items.push(get(a));
    updateCart(t);
  });

  var item1 = new Item("Breakfast", "Black Bean Dip", 16);
  var item2 = new Item("Breakfast", "Bacon and Egg", 29);
  var item3 = new Item("Breakfast", "Bagel and cream cheese", 43);

  var map = { one: item1, two: item2, three: item3 }
  function get(k){
    return map[k];
  }

  function updateCart(t, a) {
    // var row = " <tr> <td>"+t.type+"</td> <td>"+t.itemName+"</td><td>"+t.price+"</td> <td><button class='remove_btn'></button></td></tr>";
    // $("#menu-cart").append(row);
    // $("#menu-cart").closest('table').find('tr:last').prev().after(" <tr> <td>"+t.type+"</td> <td>"+t.itemName+"</td><td>"+t.price+"</td> <td><button class='remove_btn'></button></td></tr>");

    // $("#menu-cart").find('tr:last').prev().after(" <tr><td>"+t.type+"</td> <td>"+t.itemName+"</td><td>"+t.price+"</td> <td><button class='remove_btn'></button></td></tr>");
    $("#menu-cart").find('tr:last').prev().after(" <tr class='cart-data'><td>"+t.type+"</td> <td>"+t.itemName+"</td><td>"+t.price+"</td></tr>");
    total = total + parseFloat(t.price);
    $("#total-amount").html(total);
    saveCart()
  }

  if($("#order-table").length) {
    this._items.forEach(element => {
      
    });
  }

  function saveCart() {
    sessionStorage.setItem('shoppingCart', JSON.stringify(_items));
  }

  $( "#clearCart" ).on( "click", function( event ) {
    event.preventDefault();
    _items = [];
    total = 0;
    saveCart();
    $('.cart-data').remove();
    $("#total-amount").html(total);
  });

});

function openNav() {
  document.getElementById("login-modal").style.display = "block";
}

function closeNav() {
  document.getElementById("login-modal").style.display = "none";
}

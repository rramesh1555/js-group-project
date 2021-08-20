$(document).ready(function(){


  var _items = [];
  var lUserName="";
  var lPassword="";
  var validate = /^\s*[a-zA-Z0-9,\s]+\s*$/;
  var acc = [lUserName, lPassword];

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

  if ($('#menu-table').length)
 {
  $('#menu-table').DataTable();
 }
  // $("#menu-table").DataTable();

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

  // if($("#order-table").length) {
  //   this._items.forEach(element => {

  //   });
  // }

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
  $('#create-button').on('click', function() {

    var cUsername = $("#create-username").val();
    var cPassword = $("#create-password").val();
    var cEmail = $("#create-email").val();
    var cUsernameValid = false;
    var cPasswordValid = false;
    var cEmailValid = false;
    var cUsernameObj = $("#create-username");
    var cPasswordObj = $("#create-password");
    var cEmailObj = $("#create-email");

    var vEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if(!validate.test(cUsername) || (cUsername).length == 0) {
      $(cUsernameObj).addClass("error");
      $(cUsernameObj).val("Please enter a valid username.");
    } else {
      cUsernameValid = true;
      var createUsername = $(cUsernameObj).val();
    }

    if(!validate.test(cPassword) || (cPassword).length == 0) {
      $(cPasswordObj).addClass("error");
      $(cPasswordObj).val("Password format is wrong.");
    } else {
      cPasswordValid = true;
      var createPassword = $(cPasswordObj).val();
    }

    if(!vEmail.test(cEmail)) {
      $(cEmailObj).addClass("error");
      $(cEmailObj).val("Please enter a valid email");
    } else {
      cEmailValid = true;
      console.log("Account Email " + cEmailObj.val());
    }

    $(cUsernameObj).on('click', function () {
      $(this).val("");
      $(this).removeClass("error");
    });

    $(cPasswordObj).on('click', function () {
      $(this).val("");
      $(this).removeClass("error");
    });

    $(cEmailObj).on('click', function () {
      $(this).val("");
      $(this).removeClass("error");
    });

    acc = [createUsername, createPassword];

    if(cUsernameValid == true && cPasswordValid == true && cEmailValid == true) {
      $('form').animate({
      height: "toggle",
      opacity: "toggle"
    }, "fast");
    }
  });

  $('#login-button').on('click', function() {

    let isvalid = true;
    var lUserNameEntry = $("#login-username").val();
    var lPasswordEntry = $("#login-password").val();
    var cUsernameObj1 = $("#login-username");
    var cPasswordObj1 = $("#login-password");
    if(!validate.test(lUserNameEntry) || (lUserNameEntry).length == 0) {
      $(cUsernameObj1).addClass("error");
      $(cUsernameObj1).val("Please enter a valid username.");
      let isvalid = false;
    }
    if(!validate.test(lPasswordEntry) || (lPasswordEntry).length == 0) {
      $(cUsernameObj1).addClass("error");
      $(cPasswordObj1).val("Please enter a valid password.");
      let isvalid = false;
    }
    if (lUserNameEntry != acc[0] && lPasswordEntry != acc[1]) {
      console.log(acc[0]+ " Error in Logging");
      let isvalid = false;
    }

    if(isvalid) {
      location.href = "order-success.html";
    }

  });

  $('.message a').on('click', function() {
    $("#create-username").val("");
    $("#create-password").val("");
    $("#create-email").val("");
    $("#login-username").val("");
    $("#login-password").val("");
    $('form').animate({
      height: "toggle",
      opacity: "toggle"
    }, "fast");
  });

  $('.btn-submit').on('click', evt => {

  var lname = $("#lname").val();
  var lemail = $("#lemail").val();
  var ltel = $("#ltel").val();
  var lsubject = $("#lsubject").val();

  console.log(lname)
  // var cPasswordValid = false;
  // var cEmailValid = false;
  var lnameObj = $("#lname");
  var lemailObj = $("#lemail");
  var ltelObj = $("#ltel");
  var lsubjectObj = $("#lsubject");
  let isValid = true;
  var vEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  if(!validate.test(lname) || (lname).length == 0) {
    $(lnameObj).addClass("error1");
    $(lnameObj).val("Please enter a valid username.");
    isValid = false;
  } else {
    clnameValid = true
  }

  if(!vEmail.test(lemail)) {
    $(lemailObj).addClass("error1");
    $(lemailObj).val("Please enter a valid email");
    isValid = false;
  } else {
    clemailValid = true;
  }

  const phone_number = ltel.trim();
          if (phone_number == "" || (isNaN(phone_number)) || phone_number.length != 10 ) {
            $(ltelObj).addClass("error1");
            $(ltelObj).val("Please enter a phone number");
            isValid = false;
          }


  if(!validate.test(lsubject) || (lsubject).length == 0) {
    $(lsubjectObj).addClass("error1");
    $(lsubjectObj).val("Please enter a valid Subject")
    isValid = false;
  } else {
    csubjectValid = true
  }

  $(lnameObj).on('click', function () {
    $(this).val("");
    $(this).removeClass("error1");
  });

  $(lemailObj).on('click', function () {
    $(this).val("");
    $(this).removeClass("error1");
  });

  $(ltelObj).on('click', function () {
    $(this).val("");
    $(this).removeClass("error1");
  });

  $(lsubjectObj).on('click', function () {
    $(this).val("");
    $(this).removeClass("error1");
  });

  if (isValid == false) {
      evt.preventDefault();
          }


  });


  if(("$order-table").length) {
    sessionStorage.getItem('shoppingCart');
    var cart = JSON.parse(sessionStorage.getItem('shoppingCart'));
    let total = 0;
    for (var i = 0; i < cart.length; i++){ 
      $("#order-table").find('tr:last').prev().after(" <tr class='cart-data'><td>"+cart[i].type+"</td> <td>"+cart[i].itemName+"</td><td>"+cart[i].price+"</td></tr>");
      total = total + cart[i].price;
    }
    $("#cart-amount").html(total);
  }

  });

function openNav() {
  document.getElementById("login-modal").style.display = "block";
}

function closeNav() {
  document.getElementById("login-modal").style.display = "none";
}

$(document).ready(function(){
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

var lUserName="";
var lPassword="";
var acc = [lUserName, lPassword];

$('#login-button').on('click', function() {

  var lUserNameEntry = $("#login-username").val();
  var lPasswordEntry = $("#login-password").val();
  if (lUserNameEntry == acc[0] && lPasswordEntry == acc[1]) {
    console.log(acc[0]+ "Logged In");
  } else {
    console.log(lUserNameEntry+ "Login Falied");
  };
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
  var validate = /^\s*[a-zA-Z0-9,\s]+\s*$/;
  var vEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  if(!validate.test(cUsername) || (cUsername).length == 0) {
    $(cUsernameObj).addClass("error")
    $(cUsernameObj).val("Please enter a valid username.")
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
    console.log("Account Email " + cEmailObj.val())
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
  console.log("Account Username " + acc[0]);
  console.log("Account Password " + acc[1]);

  if(cUsernameValid == true && cPasswordValid == true && cEmailValid == true) {
    $('form').animate({
    height: "toggle",
    opacity: "toggle"
  }, "fast");
  }
});

$('.message a').on('click', function() {
  $("#create-username").val("");
  $("#create-password").val("");
  $("#create-email").val("");
  $("#login-username").val("");
  $("#login-password").val("")
  $('form').animate({
    height: "toggle",
    opacity: "toggle"
  }, "fast");
});

});

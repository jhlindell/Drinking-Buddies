var $loginBox = $(".loginBox");
var $signUpBox = $(".signUpBox");
var $navPanels = $("#navPanels");
$("#signUpButton").on("click", signUp);
$("#cancelSignUp").on("click", signUp);
$("#login").on("click", login);

function signUp(event){
  $loginBox.toggle();
  $signUpBox.toggle();
}

function login(event) {
   window.location = "home.html";
  // $loginBox.toggle();
  // $navPanels.toggle();
}

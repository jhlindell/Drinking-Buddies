var $loginBox = $(".loginBox");
var $signUpBox = $(".signUpBox");
var $navPanels = $("#navPanels");
$("#signUpButton").on("click", signUp);
$("#cancelSignUp").on("click", signUp);
$("#login").on("click", login);
$("#plan").on("click", function(){
    window.location = "/plan.html";
});

function signUp(event){
  $loginBox.toggle();
  $signUpBox.toggle();
}

function login(event) {
  $loginBox.toggle();
  $navPanels.toggle();
}

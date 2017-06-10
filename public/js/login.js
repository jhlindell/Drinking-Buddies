var $loginBox = $(".loginBox");
var $signUpBox = $(".signUpBox");
$("#signUpButton").on("click", signUp);
$("#cancelSignUp").on("click", signUp);

function signUp(event){
  $loginBox.toggle();
  $signUpBox.toggle();
}

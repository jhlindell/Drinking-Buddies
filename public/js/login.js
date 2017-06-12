var $loginBox = $(".loginBox");
var $signUpBox = $(".signUpBox");
var $navPanels = $("#navPanels");
$("#signUpButton").on("click", signUp);
$("#cancelSignUp").on("click", signUp);
$("#login").on("click", login);

$('#signUp').on('click',register);

function signUp(event){
  $loginBox.toggle();
  $signUpBox.toggle();
}

function login(event) {
   window.location = "home.html";
  // $loginBox.toggle();
  // $navPanels.toggle();
}

function register(event){
  const userName = $('#newUserName').val().trim();
  const fullName = $('#newFullName').val().trim();
  const email = $('#newUserEmail').val().trim();
  const password = $('#newPassword').val();
  const confirmPassword = $('#secondPassword').val();
  const birthday = $('#birthday').val().trim();

  if(password !== confirmPassword){
    return window.alert('Passwords do not match')
  }
  const options = {
    contentType: 'application/json',
    data: JSON.stringify({userName, fullName, email, password, birthday}),
    dataType: 'json',
    method: 'POST',
    url: '/api/users'
  }
console.log('uhhhh')
  $.ajax(options)
  .done(()=>{
    window.location.href = 'home.html'
  })
  .fail(($xhr)=>{
    console.log('fail');
  })
}


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
  const username = $('#userName').val().trim();
  const password = $('#password').val().trim();
  const options = {
    contentType: 'application/json',
    data: JSON.stringify({username, password}),
    method: 'POST',
    url: '/api/users/login'
  };

  $.ajax(options)
  .done(()=>{
    console.log('successful login');
    window.location.href = '/home.html';
  })
  .fail((err)=>{
    console.log('error', err);
    console.log('Could not verify user');
  });
}

function register(event){
  const username = $('#newUserName').val().trim();
  const full_name = $('#newFullName').val().trim();
  const email = $('#newUserEmail').val().trim();
  const password = $('#newPassword').val();
  const confirmPassword = $('#secondPassword').val();
  const birthday = $('#birthday').val().trim();

  if(password !== confirmPassword){
    return window.alert('Passwords do not match');
  }
  const options = {
    contentType: 'application/json',
    data: JSON.stringify({username, full_name, email, password, birthday}),
    method: 'POST',
    url: '/api/users/register'
  };

  $.ajax(options)
  .done(()=>{
    window.location.href = 'index.html';
  })
  .fail(($xhr)=>{
    console.log('Could not create new user');
  });
}

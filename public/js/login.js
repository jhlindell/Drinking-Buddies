
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
  var today21st = new Date();
  var dd = today21st.getDate();
  var mm = today21st.getMonth()+1; //January is 0!
  var yyyy = today21st.getFullYear()-21;
  if(dd<10) {dd='0'+dd;}
  if(mm<10) {mm='0'+mm;}
  today21st = yyyy+'-'+mm+'-'+dd;
  console.log('today21st', today21st);
  console.log('birthday', birthday);

  if(password !== confirmPassword){
    return window.alert('Passwords do not match');
  } else if(birthday > today21st){
    return window.alert('You must be of legal drinking age to use Drinking Buddies');
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

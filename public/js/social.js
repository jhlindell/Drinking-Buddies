$(document).ready(getUserInfo);
const $username = $('#username');
const $userfullname = $('#userfullname');
const $useremail = $('#useremail');
const $useravatar = $('#useravatar')

function getUserInfo(){
  let options = {
    contentType: 'application/json',
    method: 'GET',
    url: '/api/users/'
  };
  $.ajax(options)
    .done((data) =>{
      // let object = JSON.stringify(data);
      console.log(data);
      $username.html('Username: ' + data.username);
      $userfullname.html('Full Name: ' + data.full_name);
      $useremail.html('Email: ' + data.email);
      $useravatar.html('<img src =\' https://media.giphy.com/media/12EU871eV5HSq4/giphy.gif\'>');

    })
    .fail((err) => {
      console.log(err);
    });
}

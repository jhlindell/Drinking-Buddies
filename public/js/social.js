$(document).ready(getUserInfo);
const $user = $('#userInfo');

function getUserInfo(){
  let options = {
    contentType: 'application/json',
    method: 'GET',
    url: '/api/users/'
  };
  $.ajax(options)
    .done((data) =>{
      let object = JSON.stringify(data);
      console.log(object);
      $user.html(JSON.stringify(data));
    })
    .fail((err) => {
      console.log(err);
    });
}

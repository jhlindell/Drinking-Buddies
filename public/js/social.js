$(document).ready(getUserInfo);
$(document).ready(getFriendInfo);
const $results = $('#results');
const $tbody = $("#tableBody");
const $username = $('#username');
const $userfullname = $('#userfullname');
const $useremail = $('#useremail');
const $useravatar = $('#useravatar');
let $userid = 0;
$('#search').on('submit',search);
$('#tableBody').mouseover(addButtonListener);
$('#logout').on('click', logout);

function logout(){
  document.clearCookie;
  window.location.href = "index.html";
  console.log('working')
}

function addButtonListener(){
  $('.friendButton').on('click', addFriend);
}


function getUserInfo(){
  let options = {
    contentType: 'application/json',
    method: 'GET',
    url: '/api/users/'
  };
  $.ajax(options)
    .done((data) =>{
      $useravatar.html('<img src = \"' + data.avatar + '\"height = 200px width = 200px > ');
      $username.html('Username: ' + data.username);
      $userfullname.html('Full Name: ' + data.full_name);
      $useremail.html('Email: ' + data.email);

      $userid = data.id;


    })
    .fail((err) => {
      console.log(err);
    });
}

function getFriendInfo(){
  let options = {
    contentType: 'application/json',
    method: 'GET',
    url: '/api/users/friends'
  };
  $.ajax(options)
    .done((data) =>{
      for (let i = 0; i < data.length; i++){
        $(`#friend${i+1}`).html('<img src = \"' + data[i].avatar + '\"height = 100px width = 100px> '+ '<p>' + data[i].username + ' ' + data[i].full_name.substring(0,data[i].full_name.indexOf(' '))+'</p>');
      }
    })
    .fail((err) => {
      console.log(err);
    });
}

function search(event){
  event.preventDefault();
  $results.html('Gathering search results...');
  let $value = $('#searchBox').val();
  let $toggle = $("input[name='toggleCat']:checked").val();
  let payload = {
    name: $value,
    toggle: $toggle
  };
  let options = {
    contentType: 'application/json',
    data: JSON.stringify(payload),
    method: 'POST',
    url: '/api/users/search'
  };
  $.ajax(options)
    .done((data) => {
      $tbody.empty();
      if(data.length === 0){
        $results.html('Your search did not return any users.');
      } else {
        $results.html("");
        dataToTable(data);

      }
    })
    .fail((err) => {
      console.error('User search failed:',err);
    });
}

function dataToTable(data){
  if(data.length === 1){
    let $tr = $("<tr>");
    $tr.addClass("animated");
    $tr.addClass("slideInDown");
    let $username = $("<td>");
    $username.text(data[0].username);
    let $fullname = $("<td>");
    $fullname.text(data[0].full_name);
    let $friendButton = $("<td>");
    $friendButton.html(`<button class="btn friendButton" id="${data[0].id}">Add ${data[0].full_name} as Drinking Buddy</button>`);
    $tr.append($username);
    $tr.append($fullname);
    $tr.append($friendButton);
    $tbody.append($tr);
  } else {
    for (let i=0; i<data.length; i++){
      let $tr = $("<tr>");
      $tr.addClass("animated");
      $tr.addClass("slideInDown");
      let $username = $("<td>");
      $username.text(data[i].username);
      let $fullname = $("<td>");
      $fullname.text(data[i].full_name);
      let $friendButton = $("<td>");
      $friendButton.html(`<button class="friendButton" id="${data[i].id}">Add ${data[i].full_name} as Drinking Buddy</button>`);
      $tr.append($username);
      $tr.append($fullname);
      $tr.append($friendButton);
      $tbody.append($tr);
    }
  }
}

function addFriend(event){
  event.stopImmediatePropagation();
  let friend_id = event.target.id;
  let user_id = $userid;

  let payload = {
    user_id: user_id,
    friend_id: friend_id
  };
  let options = {
    contentType: 'application/json',
    data: JSON.stringify(payload),
    method: 'POST',
    url: '/api/users/friend'
  };
  $.ajax(options)
    .done((data) => {
      window.alert(data);
      getFriendInfo();
    })
    .fail((err) => {
      console.error('User add failed:',err);
    });

}

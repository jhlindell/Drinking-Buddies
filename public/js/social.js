$(document).ready(getUserInfo);
const $results = $('#results');
const $tbody = $("#tableBody");
const $username = $('#username');
const $userfullname = $('#userfullname');
const $useremail = $('#useremail');
const $useravatar = $('#useravatar');
$('#search').on('submit',search);


function getUserInfo(){
  let options = {
    contentType: 'application/json',
    method: 'GET',
    url: '/api/users/'
  };
  $.ajax(options)
    .done((data) =>{
      // let object = JSON.stringify(data);
      $username.html('Username: ' + data.username);
      $userfullname.html('Full Name: ' + data.full_name);
      $useremail.html('Email: ' + data.email);
      $useravatar.html('<img src =\' https://media.giphy.com/media/12EU871eV5HSq4/giphy.gif\'>');

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
        $results.html('Your search did not return anything.');
      } else {
        $results.html("");
        dataToTable(data);

      }
    })
    .fail((err) => {
      console.log(err);
      $results.html('Your search did not return anything.');
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
    $friendButton.html(`<button id="${data[0].id}">Add ${data[0].full_name} as Drinking Buddy</button>`);
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
      $friendButton.html(`<button id="${data[i].id}">Add ${data[i].full_name} as Drinking Buddy</button>`);
      $tr.append($username);
      $tr.append($fullname);
      $tr.append($friendButton);
      $tbody.append($tr);
    }
  }
}

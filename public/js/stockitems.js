$(document).ready(getAll);
const $results = $('#results');
const $tbody = $("#tableBody");
$('#search').on('submit',search);

function getAll(event){
  let options = {
    contentType: 'application/json',
    method: 'GET',
    url: '/api/stockitems/'
  };

  $.ajax(options)
    .done((data) =>{
      $tbody.empty();
      $results.html("");
      dataToTable(data);
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
    id: $value,
    toggle: $toggle
  };
  let options = {
    contentType: 'application/json',
    data: JSON.stringify(payload),
    method: 'POST',
    url: '/api/stockitems/search'
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
  for (let i=0; i<data.length; i++){
  let numIngredients = data.length;
  let $tr = $("<tr>");
  $tr.addClass("animated");
  $tr.addClass("slideInDown");
  let $category = $("<td>");
  $category.text(data[i].category);
  let $name = $("<td>");
  $name.text(data[i].name);
  let $description = $("<td>");
  $description.text(data[i].description);
  $tr.append($category);
  $tr.append($name);
  $tr.append($description);
  $tbody.append($tr);
  }
}

$(document).ready(getAll);
const $results = $('#results');
const $tbody = $("#tableBody");
$('#search').on('submit',search);
$('#create').on('click', createEntryBox);
$('#addStockItem').on('click', addStockItem);
$('#cancelStockItem').on('click', closeEntryBox);

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

function createEntryBox(event){
  $('#entryBox').toggle();
}

function closeEntryBox(event){
  $('#entryBox').hide();
  $('#stockItemName').val('');
  $('#catSelect').val(1);
  $('#description').val('');
}

function addStockItem(event){
  event.preventDefault();
  let si = {};
  si.name = $('#stockItemName').val();
  si.category = $('#catSelect').val();
  si.description = $('#description').val();
  let options = {
    contentType: 'application/json',
    data: JSON.stringify(si),
    method: 'POST',
    url: '/api/stockitems/'
  };
  $.ajax(options)
    .done((data) => {
      window.alert(data.name + " successfully created!");
      $('#entryBox').hide();
      $('#stockItemName').val('');
      $('#catSelect').val(1);
      $('#description').val('');
      }
    )
    .fail((err) => {
      window.alert('That stock item already exists.');
    });
}

function dataToTable(data){
  for (let i=0; i<data.length; i++){
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

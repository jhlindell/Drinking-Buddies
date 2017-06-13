$(document).ready(getAll);
const $results = $('#results');
$('#search').on('submit',search);

function getAll(event){
  let options = {
    contentType: 'application/json',
    method: 'GET',
    url: '/api/stockitems/'
  };

  $.ajax(options)
    .done((data) =>{
      $results.html(JSON.stringify(data));
    })
    .fail((err) => {
      console.log(err);
    });
}

function search(event){
  event.preventDefault();
  $results.html('Gathering search results...');
  let $value = $('#searchBox').val();
  let options = {
    contentType: 'application/json',
    data: JSON.stringify({$value}),
    method: 'POST',
    url: '/api/stockitems/search'
  };
  $.ajax(options)
    .done((data) => {
      if(data.length === 0){
        $results.html('Your search did not return anything.');
      } else {
        $results.html(JSON.stringify(data));
      }
    })
    .fail((err) => {
      console.log(err);
      $results.html('Your search did not return anything.');
    });

}

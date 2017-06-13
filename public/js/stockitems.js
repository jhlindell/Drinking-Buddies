
$('#search').on('submit',search);

function search(event){
  event.preventDefault();
  let $value = $('#search').children('input').val();
  console.log($value);
  let options = {
    contentType: 'application/json',
    data: JSON.stringify($value),
    method: 'POST',
    url: '/api/stockitems/search'
  };
  $.ajax(options)
    .done(() => {

    })
    .fail(() => {

    });

}

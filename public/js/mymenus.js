$(document).ready(getAll);
$('#create').on('submit', createMenu);

var $userid = 0;

function populateMenu(menuDetails) {
  let $recipeBox = $('<div>');
  $recipeBox.addClass('col-md-6 col-sm-12 recipeBox animated slideInDown');
  $panelPrimary = $('<div>');
  $panelPrimary.addClass('panel panel-default');
  $panelHeading = $('<div>');
  $panelHeading.addClass('panel-heading');
  $panelTitle = $('<h3>');
  $panelTitle.addClass('panel-title');
  $panelTitle.text(menuDetails.menu_name);
  $panelBody = $('<div>');
  $panelBody.addClass('panel-body');
  $panelRow = $('<div>');
  $panelRow.addClass('row');
  $panelCol = $('<div>');
  $panelCol.addClass('col-md-10 col-md-offset-1');
  $panelTable = $('<table>');
  $panelTable.addClass('table table-bordered text-center');
  $panelTbody = $('<tbody>');

  menuDetails.recipes.forEach(function(recipe) {
    //recipes
    let $recipeTr = $("<tr>");
    let $recipeTd = $("<td>");
    $recipeTr.append($recipeTd);
    let $recipeNameDiv = $("<div>");
    let $recipeNameH = $("<h1>");
    $recipeNameH.html(recipe[0].name);
    $recipeNameDiv.append($recipeNameH);
    $recipeTd.append($recipeNameDiv);
    //closes recipes

    //ingredients
    let $table = $("<table>");
    $table.addClass("table-menuStyle");
    let $tbody = $("<tbody>");
    $table.append($tbody);
    let $tr = $("<tr>");
    let $p = $("<p>");
    let ingredientString = "";
    for(let i = 0; i < recipe[0].ingredients.length; i++){
      ingredientString += recipe[0].ingredients[i].ingredientName;
      if(i < recipe[0].ingredients.length-1){
        ingredientString += ", ";
      }
    }
    $p.text(ingredientString);
    $tr.append($p);
    $tbody.append($tr);
    $recipeTd.append($table);
    //closes ingredients table

    $panelTbody.append($recipeTr);
    $panelTable.append($panelTbody);
    $panelCol.append($panelTable);
    $panelRow.append($panelCol);
    $panelBody.append($panelRow);
    $panelHeading.append($panelTitle);
    $panelPrimary.append($panelHeading);
    $panelPrimary.append($panelBody);
    $recipeBox.append($panelPrimary);
    $('#myMenus').append($recipeBox);
  });
}

function getAll(event) {
  let getIdOptions = {
    contentType: 'application/json',
    method: 'GET',
    url: '/api/users/'
  };
  $.ajax(getIdOptions)
    .done((data) =>{
      $userid = data.id;
      let getMenuNameOptions = {
        contentType: 'application/json',
        method: 'GET',
        url: `/api/menus/user/${$userid}`,
      };

      $.ajax(getMenuNameOptions)
        .done((usersMenus) => {
          let promiseArray =[];
          for (let i=0; i<usersMenus.length; i++){
            promiseArray.push(parseMenu(usersMenus[i]));
          }
          Promise.all(promiseArray).then((results) => {
            for(let i = 0; i< results.length; i++){
            populateMenu(results[i]);
          }
          });

        })
        .fail((err) => {
          console.error(err);
        });
    })
    .fail((err) => {
      console.error(err);
    });
}

function parseMenu(userMenu) {
  let parseMenuOptions = {
    contentType: 'application/json',
    method: 'GET',
    url: `/api/menus/${userMenu.id}`,
  };

  return $.ajax(parseMenuOptions)
    .done((menuDetails)=>{
      return menuDetails;
  })
  .fail((err)=>{
    console.error(err);
  });
}

function createMenu(event){
  event.preventDefault();
  let $menuName = $('#createBox').val();
  let payload = {
    menu_name: $menuName,
  };
  let options = {
    data: JSON.stringify(payload),
    contentType: 'application/json',
    method: 'POST',
    url: `/api/menus/create`,
  };

  $.ajax(options)
    .done((data)=>{
      window.alert(`${data} menu created! Sending you to Recipes to add some cocktails...`);
      window.location.href = '/recipes.html';
  })
  .fail((err)=>{
    console.error(err);
  });
}

$(document).ready(getAll);

// var $menuBox = $("#menuBox");
var $userid = 0;

function populateMenu(menuDetails) {

  // let $menuBox = $('<div>');
  // $menuBox.addClass('row');
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
          for (let i=0; i<usersMenus.length; i++){
            parseMenu(usersMenus[i]);
          }
        })
        .fail((err) => {
          console.err(err);
        });
    })
    .fail((err) => {
      console.err(err);
    });
}

function parseMenu(userMenu) {
  let parseMenuOptions = {
    contentType: 'application/json',
    method: 'GET',
    url: `/api/menus/${userMenu.id}`,
  };

  $.ajax(parseMenuOptions)
    .done((menuDetails)=>{
    // console.log('menuDetails', menuDetails);
    populateMenu(menuDetails);
  })
  .fail((err)=>{
    console.err(err);
  });
}

// function createRecipeBox(event) {
//   $('#recipeBox').toggle();
// }
//
// function initializePage(recipes) {
//   let numRecipies = recipes.length;
//   for (let i = 0; i < numRecipies; i++) {
//     addRecipeCard();
//     populateCard(i + 1);
//   }
// }
//
// //adds another recipe card to the #recipes row
// function addRecipeCard(event) {
//   recipeCounter++;
//   let $clone = $("#cardClone").clone();
//   $clone.toggle();
//   $clone.removeAttr("id");
//   $clone.addClass("recipeCards");
//   if (removedCardNumbers.length) {
//     removedCardNumbers.sort();
//     let cardNum = removedCardNumbers.shift();
//     $clone.attr("data-recipe", cardNum);
//     $clone.find(".panel-title").html("Recipe " + cardNum);
//   } else {
//     $clone.attr("data-recipe", recipeCounter);
//     $clone.find(".panel-title").html("Recipe " + recipeCounter);
//   }
//   $clone.appendTo($recipes);
//   // document.getElementById('pageBottom').scrollIntoView();
// }
//
// function populateCard(num) {
//   console.log(num);
//   let $selectedCard = $recipes.find("[data-recipe='" + num + "']");
//   console.log($selectedCard);
//   let recipeNumber = $selectedCard[0].dataset.recipe;
//   let recipe = recipes[recipeNumber - 1];
//   let $recipeBody = $selectedCard.find(".recipeBody");
//   $recipeBody.empty();
//   //drink name
//   $selectedCard.find(".panel-title").html(recipe.name);
//   //ingredients
//   let $row = $("<div>");
//   $row.addClass("row");
//   let $col = $("<div>");
//   $col.addClass("col-md-12");
//   $row.append($col);
//   let $table = $("<table>");
//   $table.addClass("table-striped");
//   $table.addClass("table-styling");
//   let $tbody = $("<tbody>");
//   let $scrollHint = $("<p>");
//   $scrollHint.text("scroll for full ingredient list");
//   $col.append($scrollHint);
//   $col.append($table);
//   $table.append($tbody);
//   $(recipe.ingredients).each(function() {
//     let $tr = $("<tr>");
//     let $measure = $("<td>");
//     $measure.text(this.measure);
//     let $unit = $("<td>");
//     $unit.text(this.unit);
//     let $ingredientName = $("<td>");
//     $ingredientName.text(this.ingredientName);
//     $tr.append($measure);
//     $tr.append($unit);
//     $tr.append($ingredientName);
//     $tbody.append($tr);
//   });
//   $recipeBody.append($row);
//   //instructions
//   let $instructions = $("<div>");
//   let $instH = $("<h4>");
//   $instH.html("Instructions: ");
//   let $instP = $("<p>");
//   $instP.text(recipe.instructions);
//   $instructions.append($instH);
//   $instructions.append($instP);
//   $recipeBody.append($instructions);
//   //description
//   let $description = $("<div>");
//   let $descH = $("<h4>");
//   $descH.html("Description");
//   let $descP = $("<p>");
//   $descP.text(recipe.description);
//   $description.append($descH);
//   $description.append($descP);
//   $recipeBody.append($description);
// }
//
// //populates recipebox with object info
// function populateRecipeBox() {
//   let $selectedCard = $recipes.find(".panel-primary").parent();
//   let recipeNumber = $selectedCard[0].dataset.recipe;
//   if (recipeNumber <= recipeObjectArray.length) {
//     let recipe = recipeObjectArray[recipeNumber - 1];
//     if (recipe) {
//       $("#drinkName").val(recipe.name);
//       $("#instructions").val(recipe.instructions);
//       $("#description").val(recipe.description);
//       $ingredients.find(".ingredient").remove();
//       for (let j = 0; j < recipe.ingredients.length; j++) {
//         let $clone = $(".ingClone").clone();
//         $clone.removeClass("ingClone");
//         $clone.addClass("ingredient");
//         $clone.find(".measure").val(recipe.ingredients[j].measure);
//         $clone.find(".ingName").val(recipe.ingredients[j].ingredientName);
//         $clone.toggle();
//         $clone.appendTo($ingredients);
//       }
//     }
//   } else {
//     $("#drinkName").val("");
//     $("#instructions").val("");
//     $("#description").val("");
//     $ingredients.find(".ingredient").remove();
//     let $clone = $(".ingClone").clone();
//     $clone.removeClass("ingClone");
//     $clone.addClass("ingredient");
//     $clone.toggle();
//     $clone.appendTo($ingredients);
//   }
// }

$(document).ready(getAll);
const $results = $('#results');
$('#search').on('submit',search);
$('#create').on('click', createRecipeBox);

function getAll(event){
  let options = {
    contentType: 'application/json',
    method: 'GET',
    url: '/api/recipes/'
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
  let payload = {
    id: $value
  };
  let options = {
    contentType: 'application/json',
    data: JSON.stringify(payload),
    method: 'POST',
    url: '/api/recipes/search'
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

function createRecipeBox(event){
  $('#recipeBox').toggle();
}

function initializePage(recipes) {
  let numRecipies = recipes.length;
  for (let i = 0; i < numRecipies; i++) {
    addRecipeCard();
    populateCard(i + 1);
  }
}

//adds another recipe card to the #recipes row
function addRecipeCard(event) {

  if (recipeCounter < 6) {
    recipeCounter++;
    let $clone = $("#cardClone").clone();
    $clone.toggle();
    $clone.removeAttr("id");
    $clone.addClass("recipeCards");
    if (removedCardNumbers.length) {
      removedCardNumbers.sort();
      let cardNum = removedCardNumbers.shift();
      $clone.attr("data-recipe", cardNum);
      $clone.find(".panel-title").html("Recipe " + cardNum);
    } else {
      $clone.attr("data-recipe", recipeCounter);
      $clone.find(".panel-title").html("Recipe " + recipeCounter);
    }
    $clone.appendTo($recipes);
    if (recipeCounter === 6) {
      $("#addRecipeButton").toggle();
    }
    document.getElementById('pageBottom').scrollIntoView();
  }
}

function populateCard(num) {
  let $selectedCard = $recipes.find("[data-recipe='" + num + "']");
  let recipeNumber = $selectedCard[0].dataset.recipe;
  let recipe = recipeObjectArray[recipeNumber - 1];
  let $recipeBody = $selectedCard.find(".recipeBody");
  $recipeBody.empty();
  //drink name
  $selectedCard.find(".panel-title").html(recipe.name);
  //ingredients
  let $row = $("<div>");
  $row.addClass("row");
  let $col = $("<div>");
  $col.addClass("col-md-12");
  $row.append($col);
  let $table = $("<table>");
  $table.addClass("table-striped");
  $table.addClass("table-styling");
  let $tbody = $("<tbody>");
  let $scrollHint = $("<p>");
  $scrollHint.text("scroll for full ingredient list");
  $col.append($scrollHint);
  $col.append($table);
  $table.append($tbody);
  $(recipe.ingredients).each(function() {
    let $tr = $("<tr>");
    let $measure = $("<td>");
    $measure.text(this.measure);
    let $unit = $("<td>");
    $unit.text(this.unit);
    let $ingredientName = $("<td>");
    $ingredientName.text(this.ingredientName);
    $tr.append($measure);
    $tr.append($unit);
    $tr.append($ingredientName);
    $tbody.append($tr);
  });
  $recipeBody.append($row);
  //instructions
  let $instructions = $("<div>");
  let $instH = $("<h4>");
  $instH.html("Instructions: ");
  let $instP = $("<p>");
  $instP.text(recipe.instructions);
  $instructions.append($instH);
  $instructions.append($instP);
  $recipeBody.append($instructions);
  //description
  let $description = $("<div>");
  let $descH = $("<h4>");
  $descH.html("Description");
  let $descP = $("<p>");
  $descP.text(recipe.description);
  $description.append($descH);
  $description.append($descP);
  $recipeBody.append($description);
}

//populates recipebox with object info
function populateRecipeBox() {
  let $selectedCard = $recipes.find(".panel-primary").parent();
  let recipeNumber = $selectedCard[0].dataset.recipe;
  if (recipeNumber <= recipeObjectArray.length) {
    let recipe = recipeObjectArray[recipeNumber - 1];
    if (recipe) {
      $("#drinkName").val(recipe.name);
      $("#instructions").val(recipe.instructions);
      $("#description").val(recipe.description);
      $ingredients.find(".ingredient").remove();
      for (let j = 0; j < recipe.ingredients.length; j++) {
        let $clone = $(".ingClone").clone();
        $clone.removeClass("ingClone");
        $clone.addClass("ingredient");
        $clone.find(".measure").val(recipe.ingredients[j].measure);
        $clone.find(".ingName").val(recipe.ingredients[j].ingredientName);
        $clone.toggle();
        $clone.appendTo($ingredients);
      }
    }
  } else {
    $("#drinkName").val("");
    $("#instructions").val("");
    $("#description").val("");
    $ingredients.find(".ingredient").remove();
    let $clone = $(".ingClone").clone();
    $clone.removeClass("ingClone");
    $clone.addClass("ingredient");
    $clone.toggle();
    $clone.appendTo($ingredients);
  }
}

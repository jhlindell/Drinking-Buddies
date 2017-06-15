const knex = require('../knex');

function getRecipes(id, type){
  let query = knex('recipes')
    .select('recipes.id',
      'recipes.name',
      'recipes.description',
      'recipes.instructions',
      'recipes.template',
      'recipes.attributed_to',
      'users.username as posted_by',
      'recipes.variant_of'
      )
      .innerJoin('users', 'recipes.posted_by', 'users.id')
      .orderBy('id', 'asc');

    // if(id){
    //   if()
    //   query.where('recipes.id', id);
    // }

    if(id){
      if(type === 'number'){
        query.where("recipes.id", id);
      }
      if (type === 'string'){
        query.where("recipes.name", "~*", id);
      }
    }
    return query;
}

function getIngredients(id){
  return knex('ingredients')
    .select(
      'ingredients.id',
      'units.name as unit',
      'ingredients.measure',
      'stock_items.name as ingredientName',
      'recipe_id',
      'ingredients.order'
    )
    .innerJoin('units', 'ingredients.unit', 'units.id')
    .innerJoin('stock_items', 'ingredients.stock_item_id', 'stock_items.si_id')
    .innerJoin('recipes', 'recipes.id', 'ingredients.recipe_id')
    .where('ingredients.recipe_id', id)
    .orderBy('ingredients.order', 'asc')
    .then(result => {
      return result;
    });
}

function getList(id, type) {
  return getRecipes(id, type)
    .then(items =>
      Promise.all(items.map(item =>
        getIngredients(item.id)
        .then(ingredient_data => {
          item.ingredients = ingredient_data;
          return item;
        })
      ))
      .then(result => id ? result[0] : result)
    );
}

module.exports = {
  getList
};

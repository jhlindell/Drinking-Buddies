const knex = require('../knex');

function getRecipes(id,keyword){
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

    if(id){
      if(keyword === 'internal'){
        query.where('recipes.id',id);
      } else if (keyword === 'name'){
        query.where('recipes.name','~*',id);
      }
    }
    return query;
}

function getIngredients(id){
  return knex('ingredients')
    .select(
      'ingredients.id',
      'units.name',
      'ingredients.measure',
      'stock_items.name',
      'recipe_id',
      'ingredients.order'
    )
    .innerJoin('units', 'units.id', 'ingredients.unit')
    .innerJoin('stock_items', 'ingredients.stock_item_id', 'stock_items.si_id')
    .innerJoin('recipes', 'recipes.id', 'ingredients.recipe_id')
    .where('ingredients.recipe_id', id)
    .orderBy('ingredients.order', 'asc')
    .then(result => {
      return result;
    });
}

function getList(id, keyword) {
  return getRecipes(id, keyword)
    .then(items =>
      Promise.all(items.map(item =>
        getIngredients(item.id)
        .then(ingredient_data => {
          item.ingredients = ingredient_data;
          return item;
        })
      ))
      .then(result =>{
        return result;
      })
    );
}

module.exports = {
  getList
};

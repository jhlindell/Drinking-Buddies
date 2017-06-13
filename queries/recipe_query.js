const knex = require('../knex');

function getRecipes(id){
  let query = knex('recipes')
    .select('recipes.id',
      'recipes.name',
      'recipes.description',
      'recipes.instructions',
      'recipes.template',
      'recipes.attributed_to',
      'recipes.posted_by',
      'recipes.variant_of');

    if(id){
      query.where("si_id", id);
    }
    return query;
}

function get(id) {
  return getRecipes(id)
    .then(items =>
      Promise.all(items.map(item =>
        getTags(item.id)
        .then(tag_data => {
          item.tags = tag_data;
          return item;
        })
      ))
      .then(result => id ? result[0] : result)
    );
}

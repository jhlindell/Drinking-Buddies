
exports.seed = function(knex, Promise) {
  let data = [
    {
      id:1,
      unit:1,
      measure:2.0,
      stock_item_id:1,
      recipe_id:1
    },
    {
      id:2,
      unit:1,
      measure:0.5,
      stock_item_id:31,
      recipe_id:1
    },
    {
      id:3,
      unit:1,
      measure:0.75,
      stock_item_id:29,
      recipe_id:1
    },
    {
      id:4,
      unit:1,
      measure:0.5,
      stock_item_id:30,
      recipe_id:1
    }
  ];




  return knex('ingredients').del()
    .then(() => {
      return knex('ingredients').insert(data);})
    .then(() => {
      return knex.raw("SELECT setval('ingredients_id_seq', (SELECT MAX(id) FROM ingredients))");
    });
  };

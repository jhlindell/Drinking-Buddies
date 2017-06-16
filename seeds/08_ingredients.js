
exports.seed = function(knex, Promise) {
  let data = [
    {
      id:1,
      unit:1,
      measure:2.0,
      stock_item_id:1,
      recipe_id:1,
      order: 1
    },
    {
      id:2,
      unit:1,
      measure:0.5,
      stock_item_id:31,
      recipe_id:1,
      order: 2
    },
    {
      id:3,
      unit:1,
      measure:0.75,
      stock_item_id:29,
      recipe_id:1,
      order: 3
    },
    {
      id:4,
      unit:1,
      measure:0.5,
      stock_item_id:30,
      recipe_id:1,
      order: 4
    },
    {
      id:5,
      unit:1,
      measure:1.5,
      stock_item_id:8,
      recipe_id:2,
      order: 1
    },
    {
      id:6,
      unit:1,
      measure:1.5,
      stock_item_id:32,
      recipe_id:2,
      order: 2
    },
    {
      id:7,
      unit:1,
      measure:1.0,
      stock_item_id:33,
      recipe_id:2,
      order: 3
    },
    {
      id:8,
      unit:1,
      measure:0.5,
      stock_item_id:29,
      recipe_id:2,
      order: 4
    },
    {
      id:9,
      unit:1,
      measure:0.5,
      stock_item_id:24,
      recipe_id:2,
      order: 5
    },
    {
      id:10,
      unit:1,
      measure:2.0,
      stock_item_id:13,
      recipe_id:3,
      order: 1
    },
    {
      id:11,
      unit:1,
      measure:0.5,
      stock_item_id:24,
      recipe_id:3,
      order: 2
    },
    {
      id:12,
      unit:4,
      measure:2,
      stock_item_id:23,
      recipe_id:3,
      order: 3
    },
    {
      id:13,
      unit:6,
      measure:1,
      stock_item_id:34,
      recipe_id:3,
      order: 4
    },
    {
      id:14,
      unit:6,
      measure:2.0,
      stock_item_id:34,
      recipe_id:4,
      order: 1
    },
    {
      id:15,
      unit:6,
      measure:0.75,
      stock_item_id:34,
      recipe_id:4,
      order: 2
    },
    {
      id:16,
      unit:6,
      measure:0.75,
      stock_item_id:34,
      recipe_id:4,
      order: 3
    },
  ];




  return knex('ingredients').del()
    .then(() => {
      return knex('ingredients').insert(data);})
    .then(() => {
      return knex.raw("SELECT setval('ingredients_id_seq', (SELECT MAX(id) FROM ingredients))");
    });
  };

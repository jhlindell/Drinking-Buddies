
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
      id:17,
      unit:1,
      measure:1.5,
      stock_item_id:6,
      recipe_id:5,
      order: 1
    },
    {
      id:18,
      unit:1,
      measure:1.5,
      stock_item_id:34,
      recipe_id:5,
      order: 2
    },
    {
      id:19,
      unit:1,
      measure:1,
      stock_item_id:7,
      recipe_id:5,
      order: 3
    },
    {
      id:20,
      unit:1,
      measure:0.25,
      stock_item_id:38,
      recipe_id:5,
      order: 4
    },
    {
      id:21,
      unit:1,
      measure:0.25,
      stock_item_id:39,
      recipe_id:5,
      order: 5
    },
    {
      id:22,
      unit:1,
      measure:0.5,
      stock_item_id:40,
      recipe_id:5,
      order: 6
    },
    {
      id:23,
      unit:1,
      measure:0.75,
      stock_item_id:29,
      recipe_id:5,
      order: 7
    },
    {
      id:24,
      unit:1,
      measure:0.25,
      stock_item_id:41,
      recipe_id:5,
      order: 8
    },
    {
      id:25,
      unit:4,
      measure:2,
      stock_item_id:37,
      recipe_id:5,
      order: 9
    },
    {
      id:26,
      unit:4,
      measure:1,
      stock_item_id:23,
      recipe_id:5,
      order: 10
    },
    {
      id:27,
      unit:1,
      measure:3,
      stock_item_id:17,
      recipe_id:6,
      order: 1
    },
    {
      id:28,
      unit:1,
      measure:0.5,
      stock_item_id:24,
      recipe_id:6,
      order: 2
    },
    {
      id:29,
      unit:4,
      measure:5,
      stock_item_id:42,
      recipe_id:6,
      order: 3
    },
    {
      id:30,
      unit:4,
      measure:1,
      stock_item_id:37,
      recipe_id:6,
      order: 4
    },
    {
      id:31,
      unit:1,
      measure:1.5,
      stock_item_id:33,
      recipe_id:7,
      order:1
    },
    {
      id:32,
      unit:1,
      measure:1.5,
      stock_item_id:43,
      recipe_id:7,
      order:2
    },
    {
      id:33,
      unit:1,
      measure:1.5,
      stock_item_id:22,
      recipe_id:7,
      order:3
    },
    {
      id:34,
      unit:1,
      measure:1.5,
      stock_item_id:14,
      recipe_id:8,
      order:1
    },
    {
      id:35,
      unit:1,
      measure:1.5,
      stock_item_id:33,
      recipe_id:8,
      order:2
    },
    {
      id:36,
      unit:1,
      measure:1.5,
      stock_item_id:19,
      recipe_id:8,
      order:3
    },
    {
      id:37,
      unit:1,
      measure:1.5,
      stock_item_id:13,
      recipe_id:9,
      order:1
    },
    {
      id:38,
      unit:1,
      measure:1.5,
      stock_item_id:33,
      recipe_id:9,
      order:2
    },
    {
      id:39,
      unit:1,
      measure:1.5,
      stock_item_id:19,
      recipe_id:9,
      order:3
    },
    // {
    //   id:,
    //   unit:,
    //   measure:,
    //   stock_item_id:,
    //   recipe_id:,
    //   order:
    // },
  ];




  return knex('ingredients').del()
    .then(() => {
      return knex('ingredients').insert(data);})
    .then(() => {
      return knex.raw("SELECT setval('ingredients_id_seq', (SELECT MAX(id) FROM ingredients))");
    });
  };

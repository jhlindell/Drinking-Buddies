
exports.seed = function(knex, Promise) {
  let data = [
    {id: 1,
    menu_id: 1,
    recipe_id: 1},
    {id: 2,
    menu_id: 2,
    recipe_id: 3},
    {id: 3,
    menu_id: 3,
    recipe_id: 2},
    {id: 4,
    menu_id: 4,
    recipe_id: 2},
    {id: 5,
    menu_id: 4,
    recipe_id: 1},
    {id: 6,
    menu_id: 4,
    recipe_id: 3},
    {id: 7,
    menu_id: 5,
    recipe_id: 1},
    {id: 8,
    menu_id: 5,
    recipe_id: 2},
    {id: 9,
    menu_id: 1,
    recipe_id: 2},
    {id: 10,
    menu_id: 1,
    recipe_id: 3},
    {id: 11,
    menu_id: 6,
    recipe_id: 3},
    {id: 12,
    menu_id: 6,
    recipe_id: 2},
    {id: 13,
    menu_id: 6,
    recipe_id: 1},
  ];

    return knex('menu_items').del()
      .then(() => {
        return knex('menu_items').insert(data);})
      .then(() => {
        return knex.raw("SELECT setval('menu_items_id_seq', (SELECT MAX(id) FROM menu_items))");
      });
  };


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
    recipe_id: 3}
  ];

    return knex('menu_items').del()
      .then(() => {
        return knex('menu_items').insert(data);})
      .then(() => {
        return knex.raw("SELECT setval('menu_items_id_seq', (SELECT MAX(id) FROM menu_items))");
      });
  };

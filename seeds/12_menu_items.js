
exports.seed = function(knex, Promise) {
  let data = [
    {menu_id: 1,
    recipe_id: 1},
    {menu_id: 2,
    recipe_id: 3},
    {menu_id: 3,
    recipe_id: 2},
    {menu_id: 4,
    recipe_id: 2},
    {menu_id: 4,
    recipe_id: 1},
    {menu_id: 4,
    recipe_id: 3},
    {menu_id: 5,
    recipe_id: 1},
    {menu_id: 5,
    recipe_id: 2},
    {menu_id: 1,
    recipe_id: 2},
    {menu_id: 1,
    recipe_id: 3},
    {menu_id: 6,
    recipe_id: 3},
    {menu_id: 6,
    recipe_id: 2},
    {menu_id: 6,
    recipe_id: 1},
  ];

  return knex('menu_items').del()
    .then(() => {
      return knex('menu_items').insert(data);});
  };

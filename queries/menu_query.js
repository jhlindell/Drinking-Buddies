const knex = require('../knex');
const recipeQuery = require('./recipe_query');

function getMenu(id) {
  let query = knex('menus')
    .select()
    .where('menus.id', id);

  return query;
}

function getMenuItems(id) {
  let query = knex('menu_items')
    .select('menu_items.recipe_id')
    .innerJoin('menus', 'menus.id', 'menu_items.menu_id')
    .where('menu_items.menu_id', id)
    .then(result => {
      return result.map(function(element) {
        return element.recipe_id;
      });
    });

  return query;
}

function getSingle(id) {
  return getMenu(id)
    .then(function(menu) {
      menu[0].recipes = [];
      return getMenuItems(menu[0].id)
        .then(function(menu_items) {
          return Promise.all(menu_items.map(function(recipe_id) {
            return recipeQuery.getList(recipe_id, 'number')
              .then(recipe => {
                menu[0].recipes.push(recipe);
                return menu;
              });
          }));
        })
      .then(function(result) {
         return menu[0];
       });
    });
}

function getUserMenuList(userid){
  return knex('menus')
    .select('menus.id', 'menus.menu_name')
    .where('menus.user_id', userid)
    .orderBy('menus.menu_name','asc');
}

module.exports = {
  getSingle,
  getUserMenuList
};

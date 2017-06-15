const knex = require('../knex');
const recipes = require('./recipe_query');

function getMenu(id){
  let query = knex('menus')
    .select()
    .where('menus.id', id);

    return query;
}

function getMenuItems(id){
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
    .then(items =>
      Promise.all(items.map(item =>
        getMenuItems(item.id)
        .then(menu_item_data => {
          console.log(menu_item_data);
          item.recipes = menu_item_data;
          return item;
        })
      ))
      .then(result => id ? result[0] : result)
    );
}

module.exports = {
  getSingle
};

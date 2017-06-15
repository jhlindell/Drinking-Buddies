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
      console.log(menu);
      menu[0].recipes = [];
      return Promise.all(menu.map(item =>
        getMenuItems(item.id)
        .then(function(menu_items) {
          //console.log(menu_items);
          return Promise.all(menu_items.map(function(recipe_id) {
            //console.log(recipe_id);
            return recipeQuery.getList(recipe_id, 'number')
              .then(recipe => {
                //console.log(recipe);
                menu[0].recipes.push(recipe);
                //console.log(menu.recipes);
                return menu;
              });
          }));
        })
      ))
      .then(function(result) {
        //console.log(menu);
         return menu[0];
       });
    });
}

// function getUserMenuList(userid){
//   return knex('menus')
//     .where()
// }

// function getSingle(id) {
//   return getMenu(id)
//     .then(item =>
//       Promise.resolve(getMenuItems(item.id)
//         .then(menu_item =>
//           Promise.all(menu_item.map(recipe =>
//            recipeQuery.getList(recipe, 'number')
//           .then(recipes => {
//             item.recipes = recipes;
//             return item;
//           })
//       ))))
//       .then(result => id ? result[0] : result)
//     );
// }

module.exports = {
  getSingle
};

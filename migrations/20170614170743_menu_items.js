
exports.up = function(knex, Promise) {
  return knex.schema.createTable('menu_items', (table) => {
    table.integer('menu_id').references('id').inTable('menus').onDelete('cascade');
    table.integer('recipe_id').references('id').inTable('recipes').onDelete('cascade');
    table.primary(['menu_id','recipe_id']);
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.deleteTable('menu_items');
};

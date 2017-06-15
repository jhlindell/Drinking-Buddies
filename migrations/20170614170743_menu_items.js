
exports.up = function(knex, Promise) {
  return knex.schema.createTable('menu_items', (table) => {
    table.increments('id').primary();
    table.integer('menu_id').references('id').inTable('menus').onDelete('cascade');
    table.integer('recipe_id').references('id').inTable('recipes').onDelete('cascade');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.deleteTable('menu_items');
};

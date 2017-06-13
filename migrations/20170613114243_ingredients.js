
exports.up = function(knex, Promise) {
  return knex.schema.createTable('ingredients', (table) =>{
    table.increments('id').primary();
    table.integer('unit').notNullable().references('id').inTable('units');
    table.decimal('measure').notNullable().defaultsTo(0);
    table.integer('stock_item_id').notNullable().references('si_id').inTable('stock_items');
    table.integer('recipe_id').notNullable().references('id').inTable('recipes');
    table.integer('order').notNullable();
  });
};

exports.down = function(knex, Promise) {
 return knex.schema.dropTable('ingredients');
};

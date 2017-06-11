
exports.up = function(knex, Promise) {
  return knex.schema.createTable('stock_items', (table) => {
    table.increments('id').primary();
    table.string('name', 100).notNullable().defaultTo('');
    table.string('description', 255).notNullable().defaultTo('');
    table.integer('category').references('id').inTable('categories').onDelete('cascade').index();
    table.timestamps(true, true);
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('stock_items');
};

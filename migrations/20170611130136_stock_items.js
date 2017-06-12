
exports.up = function(knex, Promise) {
  return knex.schema.createTable('stock_items', (table) => {
    table.increments('si_id').primary();
    table.string('name', 255).notNullable().defaultTo('');
    table.text('description').notNullable().defaultTo('');
    table.integer('category').references('id').inTable('categories').onDelete('cascade').index();
    table.timestamps(true, true);
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('stock_items');
};

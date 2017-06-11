
exports.up = function(knex, Promise) {
  return knex.schema.createTable('categories', (table) => {
    table.increments('id').primary();
    table.string('name', 42).notNullable().defaultTo('');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('categories');
};

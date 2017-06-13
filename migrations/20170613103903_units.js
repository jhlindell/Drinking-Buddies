
exports.up = function(knex, Promise) {
  return knex.schema.createTable('units', (table) => {
    table.increments('id').primary();
    table.string('name').notNullable().defaultsTo('');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('units');
};

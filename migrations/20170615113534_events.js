
exports.up = function(knex, Promise) {
  return knex.schema.createTable('events', (table) => {
    table.increments('id').primary();
    table.string('name').notNullable().defaultsTo('');
    table.integer('guestCount').notNullable().defaultsTo(1);
    table.date('date').notNullable();
    table.integer('host_id').notNullable();
    table.integer('menu_id').notNullable();
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('events');
};

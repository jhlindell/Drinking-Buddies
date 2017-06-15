
exports.up = function(knex, Promise) {
  return knex.schema.createTable('event_guests', (table) => {
    table.increments('id').primary();
    table.integer('event_id').references('id').inTable('events').notNullable();
    table.integer('guest_id').references('id').inTable('users').notNullable();
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('event_guests');
};

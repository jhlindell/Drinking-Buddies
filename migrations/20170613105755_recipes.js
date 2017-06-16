
exports.up = function(knex, Promise) {
  return knex.schema.createTable('recipes', (table) => {
    table.increments('id').primary();
    table.string('name').notNullable().defaultsTo('');
    table.text('description').notNullable().defaultsTo('');
    table.text('instructions').notNullable().defaultsTo('');
    table.boolean('template').notNullable().defaultsTo(false);
    table.string('attributed_to').notNullable().defaultsTo('');
    table.integer('posted_by').references('id').inTable('users').onDelete('cascade').index();
    table.integer('variant_of').references('id').inTable('recipes').onDelete('cascade').index();
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('recipes');
};

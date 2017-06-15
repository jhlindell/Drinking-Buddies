
exports.up = function(knex, Promise) {
  return knex.schema.createTable('menus', (table) => {
    table.increments('id').primary();
    table.string('menu_name').notNullable().defaultsTo('');
    table.integer('user_id').references('id').inTable('users').onDelete('cascade');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('menus');
};

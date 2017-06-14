
exports.up = function(knex, Promise) {
  return knex.schema.createTable('friends', (table) => {
    table.increments('id').primary();
    table.integer('user_id').notNullable().references('id').inTable('users').onDelete('cascade').index();
    table.integer('friend_id').notNullable().references('id').inTable('users').onDelete('cascade').index();
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('friends');
};

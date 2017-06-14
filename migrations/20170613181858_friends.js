
exports.up = function(knex, Promise) {
  return knex.schema.createTable('friends', (table) => {
    table.integer('user_id').notNullable().references('id').inTable('users').onDelete('cascade').index();
    table.integer('friend_id').notNullable().references('id').inTable('users').onDelete('cascade').index();
    table.primary(['user_id','friend_id'])
  }).then(()=>{
    return knex.schema.raw("ALTER TABLE friends ADD CONSTRAINT cant_friend_yourself CHECK (user_id != friend_id)")
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('friends');
};

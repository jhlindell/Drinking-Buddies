
exports.up = function(knex, Promise) {
  return knex.schema.createTable('stock_item_tags', (table) => {
    table.increments('id').primary();
    table.integer('stock_item_id').references('id').inTable('stock_items').onDelete('cascade').index();
    table.integer('tag_id').references('id').inTable('tags').onDelete('cascade').index();
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('stock_item_tags');
};


exports.seed = function(knex, Promise) {

  let data = [
    {id: 1, stock_item_id: 1, tag_id: 1},
    {id: 2, stock_item_id: 2, tag_id: 1},
    {id: 3, stock_item_id: 3, tag_id: 1},





    // {id: , stock_item_id: , tag_id: []}
  ];

  return knex('stock_item_tags').del()
    .then(() => {
      return knex('stock_item_tags').insert(data);})
    .then(() => {
      return knex.raw("SELECT setval('stock_item_tags_id_seq', (SELECT MAX(id) FROM stock_item_tags))");
    });
};

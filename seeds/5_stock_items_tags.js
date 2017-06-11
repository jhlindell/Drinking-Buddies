
exports.seed = function(knex, Promise) {

  let data = [
    {id: 1, stock_item_id: 1, tag_id: [1,2,3,4,9]},
    {id: 2, stock_item_id: 2, tag_id: [1, 8]},
    {id: 3, stock_item_id: 3, tag_id: [1, 8]},
    {id: 4, stock_item_id: 4, tag_id: [1, 9]},
    {id: 5, stock_item_id: 5, tag_id: [13, 7]},
    {id: 6, stock_item_id: 6, tag_id: [13, 8]},
    {id: 7, stock_item_id: 7, tag_id: [13, 12]},
    {id: 8, stock_item_id: 8, tag_id: [13, 11]},
    {id: 9, stock_item_id: 9, tag_id: [13, 9]},
    {id: 10, stock_item_id: 10, tag_id: [14, 7]},
    {id: 11, stock_item_id: 11, tag_id: [14, 8]}




    // {id: , stock_item_id: , tag_id: []}
  ];

  return knex('users').del()
    .then(() => {
      return knex('users').insert(data);})
    .then(() => {
      return knex.raw("SELECT setval('users_id_seq', (SELECT MAX(id) FROM users))");
    });
};

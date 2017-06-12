const knex = require('../knex');

function getStockItems(){
  return knex('stock_items')
  .select(
    'stock_items.si_id as id',
    'stock_items.name as name',
    'stock_items.description as description',
    'categories.name as category'
  )
  .innerJoin('categories', 'stock_items.category', 'categories.id')
  .orderBy('id', 'asc');
}

function getTags(id){
  return knex('tags')
  .select(
    'tags.name'
  )
  .innerJoin('stock_item_tags', 'tags.id', 'stock_item_tags.tag_id')
  .innerJoin('stock_items', 'stock_item_tags.stock_item_id',
    'stock_items.si_id');
  // .where({si_id:id});
}

function list(){
  return getStockItems().then(items => {
    return Promise.resolve(items);
  });
}

// function list(){
//   return getStockItems().then(items => {
//     return getTags(items.id).then(tags => {
//       items.tags = tags;
//       return Promise.resolve(items);
//     });
//   });
// }

// function list(){
//   return getStockItems().then(items => {
//     Promise.all(items.map(val => Promise.all(getTags(val.id).then(tags => {val.tags = tags;return val;})))).then(complete => complete);
//   });
// }

module.exports = {
  list
};

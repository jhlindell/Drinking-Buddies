const knex = require('../knex');

// function getStockItem(id){
//   return knex('stock_items')
//   .select(
//     'stock_items.si_id as id',
//     'stock_items.name as name',
//     'stock_items.description as description',
//     'categories.name as category'
//   )
//   .innerJoin('categories', 'stock_items.category', 'categories.id')
//   .where('si_id', id)
//   .then()
// }

function getStockItems(id) {
  let query = knex('stock_items')
    .select(
      'stock_items.si_id as id',
      'stock_items.name as name',
      'stock_items.description as description',
      'categories.name as category'
    )
    .innerJoin('categories', 'stock_items.category', 'categories.id')
    .orderBy('id', 'asc');

    if(id){
      query.where("si_id", id);
    }

    return query;
}

function getTags(id) {
  return knex('tags')
    .select(
      'tags.name'
    )
    .innerJoin('stock_item_tags', 'tags.id', 'stock_item_tags.tag_id')
    .where('stock_item_tags.stock_item_id', id)
    .then(result => {
      return result.map(function(element) {
        return element.name;
      });
    });
}

function get(id) {
  return getStockItems(id)
    .then(items =>
      Promise.all(items.map(item =>
        getTags(item.id)
        .then(tag_data => {
          item.tags = tag_data;
          return item;
        })
      ))
      .then(result => id ? result[0] : result)
    );
}

module.exports = {
  get,
  getTags
};

const knex = require('../knex');

function getStockItems(id, keyword) {
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
      if(keyword === 'internal'){
        query.where("si_id", id);
      } else if(keyword === 'name'){
        query.where("stock_items.name", "~*", id);
      } else if(keyword === 'category'){
        query.where("categories.name", "~*", id);
      }
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

function getStock(id, keyword) {
  return getStockItems(id, keyword)
    .then(items =>
      Promise.all(items.map(item =>
        getTags(item.id)
        .then(tag_data => {
          item.tags = tag_data;
          return item;
        })
      ))//closes Promise
      .then(result => {
        return result;
      })
    );
}

module.exports = {
  getStock
};

const knex = require('../knex');

function getStockItems(id, toggle) {
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
      if(typeof id === 'number'){
        query.where("si_id", id);
      }
      if (typeof id === 'string' && toggle === 'name'){
        query.where("stock_items.name", "~*", id);
      }
      if (typeof id === 'string' && toggle === 'category'){
        query.where("categories.name", id);
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

function getStock(id,toggle) {
  return getStockItems(id,toggle)
    .then(items =>
      Promise.all(items.map(item =>
        getTags(item.id)
        .then(tag_data => {
          item.tags = tag_data;
          return item;
        })
      ))//closes Promise
      .then(result => {
        if(typeof id === 'number'){
          return result[0];
        } else {
          return result;
        }
      })
    );
}

module.exports = {
  getStock
};

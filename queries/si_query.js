const knex = require('knex');

function getStockItems(){
  return knex()
  .select(
    'stock_items.name as name',
    'stock_items.description as description',
    'categories.name as category'
  )
  .from('stock_items')
  .innerJoin('categories', 'stock_items.category', 'categories.id');
}

function getTags(id){
  return knex()
  .select(
    'tags.name'
  )
  .from('tags')
  .innerJoin('stock_item_tags', 'tags.id', 'stock_item_tags.tag_id')
  .innerJoin('stock_items', 'stock_item_tags.stock_item_id',
    'stock_items.id');
}

function list(){
  return getStockItems().then(items => {
    return getTags(items[0].id).then(tags => {
      items[0].tags = tags;
      return Promise.resolve(items);
    });
  });
}

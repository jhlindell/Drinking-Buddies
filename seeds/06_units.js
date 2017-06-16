
exports.seed = function(knex, Promise) {
let data = [
  {id:1, name:"oz"},
  {id:2, name:"tsp"},
  {id:3, name:"tbsp"},
  {id:4, name:"dash"},
  {id:5, name:"drops"},
  {id:6, name:"each"},
  {id:7, name:"barspoon"},
  {id:8, name:"wedge or slice"}
];

  // Deletes ALL existing entries
  return knex('units').del()
    .then(() => {
      return knex('units').insert(data);})
    .then(() => {
      return knex.raw("SELECT setval('units_id_seq', (SELECT MAX(id) FROM units))");
    });
};


exports.seed = function(knex, Promise) {

  let data = [
    {id: 1, name: 'Jamaican'},
    {id: 2, name: 'hogo'},
    {id: 3, name: 'pot still'},
    {id: 4, name: 'blended'},
    {id: 5, name: 'single'},
    {id: 6, name: 'aged'},
    {id: 7, name: 'light / blanco'},
    {id: 8, name: 'amber / oro / reposado'},
    {id: 9, name: 'dark / anejo'},
    {id: 10, name: 'rhum agricole'},
    {id: 11, name: 'black strap'},
    {id: 12, name: '151 / overproof'},
    {id: 13, name: 'Virgin Islands'},
    {id: 14, name: 'Cuban / Puerto Rican'},
    {id: 15, name: ''},




    // {id: , name: ''},
  ];

  return knex('tags').del()
    .then(() => {
      return knex('tags').insert(data);})
    .then(() => {
      return knex.raw("SELECT setval('tags_id_seq', (SELECT MAX(id) FROM tags))");
    });
};

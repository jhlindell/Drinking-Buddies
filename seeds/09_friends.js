
exports.seed = function(knex, Promise) {
let data = [
  {id: 1,
  user_id: 1,
  friend_id: 2},
];


  return knex('friends').del()
    .then(() => {
      return knex('friends').insert(data);})
    .then(() => {
      return knex.raw("SELECT setval('friends_id_seq', (SELECT MAX(id) FROM friends))");
    });
};

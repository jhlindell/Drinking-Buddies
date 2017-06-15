
exports.seed = function(knex, Promise) {
let data = [
  {user_id: 1,friend_id: 2},
  {user_id: 1,friend_id: 3},
  {user_id: 2,friend_id: 1},
];


  return knex('friends').del()
    .then(() => {
      return knex('friends').insert(data);});
};

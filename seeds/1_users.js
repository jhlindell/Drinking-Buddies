
exports.seed = function(knex, Promise) {

  let data = [{
    id: 1,
    username: 'Shotgun',
    full_name: 'Shannon Rivers',
    email: 'shannon.rivers@gmail.com',
    hashed_password: '$2a$06$PeZWh.HgnrcpySYkgyuQ8OpD/kRQKsuEYqI4HsTsJUuSdHjT0vQk2',
    admin: true,
    birthday: '10/14/1978'
  }];

  return knex('users').del()
    .then(() => {
      return knex('users').insert(data);})
    .then(() => {
      return knex.raw("SELECT setval('users_id_seq', (SELECT MAX(id) FROM users))");
    });
};

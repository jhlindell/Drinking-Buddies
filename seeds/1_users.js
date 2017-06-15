
exports.seed = function(knex, Promise) {

  let data = [
    {id: 1,
    username: 'Shotgun',
    full_name: 'Shannon Rivers',
    email: 'shannon@rivers.com',
    hashed_password: '$2a$06$PeZWh.HgnrcpySYkgyuQ8OpD/kRQKsuEYqI4HsTsJUuSdHjT0vQk2',
    //cocktailpassword
    admin: true,
    birthday: '01/01/1978'},

    {id:2,
    username: 'Zesty',
    full_name: 'Zach Passarelli',
    email: 'zach@pasarelli.com',
    hashed_password: '$2a$04$WbBovYlekgaWfEwcwnBWF.c6B1.eBVoHK/H75K0VgnNjduO2d26oy',
    admin: true,
    birthday: '01/01/1995'},

    {id:3,
    username: 'Amazing',
    full_name: 'Arlo S-J',
    email: 'arlo@s-j.com',
    hashed_password: '$2a$04$cCQ/G69RvaOjTpTO66vGoe9AjJB6Gk3qIdTbU0RwAp3CkeqgqY6iW',
    admin: true,
    birthday: '01/01/1994'},

    {id: 4,
    username: 'Jazzy',
    full_name: 'Jon Lindell',
    email: 'jon@lindell.com',
    hashed_password: '$2a$04$2okk.gGRneFIZIUKXKgoQ.CMyHXgMSsMg5Gmjh9Nbzo99S8UOIfgO',
    admin: true,
    birthday: '01/01/1977'},

    {id: 5,
    username: 'Miney',
    full_name: 'Miney S-J',
    email: 'miney@s-j.com',
    hashed_password: '$2a$04$2okk.gGRneFIZIUKXKgoQ.CMyHXgMSsMg5Gmjh9Nbzo99S8UOIfgO',
    admin: false,
    birthday: '01/01/1996'}
  ];

  return knex('users').del()
    .then(() => {
      return knex('users').insert(data);})
    .then(() => {
      return knex.raw("SELECT setval('users_id_seq', (SELECT MAX(id) FROM users))");
    });
};

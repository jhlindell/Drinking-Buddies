
exports.seed = function(knex, Promise) {
  let data = [
    { id:1,
      name: "Presentation After Party",
      date: '06/15/2017',
      guestCount: 5,
      host_id: 4,
      menu_id: 4
    }
  ];

    // Deletes ALL existing entries
    return knex('events').del()
      .then(() => {
        return knex('events').insert(data);})
      .then(() => {
        return knex.raw("SELECT setval('events_id_seq', (SELECT MAX(id) FROM events))");
      });
  };

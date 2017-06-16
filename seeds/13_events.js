
exports.seed = function(knex, Promise) {
  let data = [
    { id:1,
      name: "Presentation After Party",
      date: '06/15/2017',
      guestCount: 5,
      host_id: 4,
      menu_id: 4
    },
    { id:2,
      name: "Tiki Party!",
      date: '06/22/2017',
      guestCount: 7,
      host_id: 4,
      menu_id: 4
    },
    { id:3,
      name: "Laissez les bons temps rouler!",
      date: '06/18/2017',
      guestCount: 4,
      host_id: 1,
      menu_id: 7
    },
    { id:4,
      name: "Quiet Get-together",
      date: '06/17/17',
      guestCount: 2,
      host_id: 4,
      menu_id: 8
    },
    // { id:,
    //   name: "",
    //   date: '',
    //   guestCount: ,
    //   host_id: ,
    //   menu_id:
    // },
  ];

    // Deletes ALL existing entries
    return knex('events').del()
      .then(() => {
        return knex('events').insert(data);})
      .then(() => {
        return knex.raw("SELECT setval('events_id_seq', (SELECT MAX(id) FROM events))");
      });
  };

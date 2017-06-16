
exports.seed = function(knex, Promise) {
  let data = [
    { id:1,
      event_id: 1,
      guest_id: 1
    },
    { id:2,
      event_id: 1,
      guest_id: 2
    },
    { id:3,
      event_id: 1,
      guest_id: 3
    },
    { id:4,
      event_id: 1,
      guest_id: 4
    },
    { id:5,
      event_id: 1,
      guest_id: 5
    },
    { id:6,
      event_id: 3,
      guest_id: 2
    },
    { id:7,
      event_id: 3,
      guest_id: 3
    },
    { id:8,
      event_id: 3,
      guest_id: 4
    },
    // { id:,
    //   event_id: ,
    //   guest_id:
    // },
  ];

    // Deletes ALL existing entries
    return knex('event_guests').del()
      .then(() => {
        return knex('event_guests').insert(data);})
      .then(() => {
        return knex.raw("SELECT setval('event_guests_id_seq', (SELECT MAX(id) FROM event_guests))");
      });
  };

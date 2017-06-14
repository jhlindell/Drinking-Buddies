
exports.seed = function(knex, Promise) {
  let data = [
    {id:1,
      name: "Mai Tai",
      description: "boozy rum drink",
      instructions: "shake with ice and serve with upside down lime hull and mint sprig.",
      template: false,
      attributed_to: "Trader Vic",
      posted_by: 4,
      variant_of: null
    },
    {id:2,
      name: "Jungle Bird",
      description: "Perhaps the best tiki drink there is!",
      instructions: "shake with ice and serve in glass with ice and a mint sprig.",
      template: false,
      attributed_to: "",
      posted_by: 4,
      variant_of: null
    },
    {id:3,
      name: "Old Fashioned",
      description: "The original cocktail",
      instructions: "Build in a glass with ice.",
      template: false,
      attributed_to: "",
      posted_by: 1,
      variant_of: null
    }
  ];

    // Deletes ALL existing entries
    return knex('recipes').del()
      .then(() => {
        return knex('recipes').insert(data);})
      .then(() => {
        return knex.raw("SELECT setval('recipes_id_seq', (SELECT MAX(id) FROM recipes))");
      });
  };

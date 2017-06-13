
exports.seed = function(knex, Promise) {
  let data = [
    {id:1,
      name: "Mai Tai",
      description: "boozy rum drink",
      instructions: "shake with ice and serve with upside down lime hull and mint sprig.",
      template: false,
      attributed_to: "Trader Vic",
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

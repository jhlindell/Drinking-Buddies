
exports.seed = function(knex, Promise) {

  let data = [
    {si_id: 1,
    name: 'Smith & Cross Traditional Jamaica Rum',
    description: 'This rum represents the distinctively flavorful and aromatic style that made Jamaica rum famous in the late 19th and early 20th century. Containing only Wedderburn and Plummer pot still distillates, famous for their notes of exotic fruits and spice, it delivers a tour de force of flavour and complexity that historically made Jamaica rum a cornerstone of many classic drinks.',
    category: 1},

    {si_id: 2,
    name: 'Appleton Estate Signature Blend',
    description: 'Appleton Estate Signature Blend is a full-bodied, medium-sweet rum. It’s a delicious blend of 15 aged golden rums with a warm honey colour, a lush, fruity aroma, and a rich taste. It’s for everyone and every day, and it’s the perfect way to make ‘just another day’ feel special.',
    category: 1},

    {si_id: 3,
    name: 'Appleton Estate Reserve Blend',
    description: 'Appleton Estate Reserve Blend is a ‘blended rum’, which means it is a combination of 20 rums of different styles and ages (average 8 years) and does not have an age statement.',
    category: 1},

    {si_id: 4,
    name: 'Appleton Estate Rare Blend 12 Year Old',
    description: 'Appleton Estate Rare Blend 12 Year Old is a ‘minimum age’ rum as indicated by the number 12 displayed on the bottle. The rum is aged in Number One Select American Oak barrels.',
    category: 1},

    {si_id: 5,
    name: 'Cruzan Aged Light Rum',
    description: 'Cruzan Aged Light Rum is a blend of rums aged one to four years in American oak casks—then treated to a ﬁltration process that brings out the full-bodied taste. The light color resembles that of chardonnay, a distinctive indication of its aging. And it’s smooth. Reaaallll smooootthhh.',
    category: 1},

    {si_id: 6,
    name: 'Cruzan Aged Dark Rum',
    description: 'An exquisite blend of rums aged 2-4 years in charred oak casks, Cruzan Aged Dark Rum delivers a smooth, medium-bodied, aromatic taste with every slow sip.',
    category: 1},

    {si_id: 7,
    name: 'Cruzan 151 Rum',
    description: 'Smoother than any other rum of its proof, Cruzan 151 is aged for a minimum of one year in American oak barrels and is crafted using our same careful process. The force, and rich flavor, are strong with this one.',
    category: 1},

    {si_id: 8,
    name: 'Cruzan Black Strap Rum',
    description: 'A mixologist favorite, Cruzan Black Strap Rum features robust licorice and molasses flavors that add an exotic element to your tropical favorites. Its most popular pairings include flavors such as lemon, lime, ginger and pineapple.',
    category: 1},

    {si_id: 9,
    name: 'Cruzan Single Barrel Rum',
    description: 'One of the most awarded aged rums on the market. A unique blend of vintage rums aged for up to 12 years and bottled one cask at a time. You can’t hurry quality.',
    category: 1},

    {si_id: 10,
    name: 'Bacardi Superior',
    description: 'Before Don Facundo rewrote the script, white rums were harsh, crude and unrefined. In 1862 he created Bacardi Superior following 10 years of dedication to craft the perfect rum. With distinctive vanilla and almond notes which are developed in white oak barrels and shaped through a secret blend of charcoal for a distinctive smoothness.',
    category: 1},

    {si_id: 11,
    name: 'Bacardi Gold',
    description: 'Bacardi Gold is expertly crafted by Maestros de Ron Bacardi. Its rich flavors and golden complexion are developed in toasted oak barrels and its mellow character comes from being shaped through a secret blend of charcoals.  Bacardi Gold features rich vanilla, buttery caramel, toasted almond and sweet banana notes with the warm zest of orange peel and a light tasting, oaky finish.',
    category: 1},

    // {si_id: 12,
    // name: '',
    // description: '',
    // category: },
    //
    // {si_id: 13,
    // name: '',
    // description: '',
    // category: },

    // {si_id: ,
    // name: '',
    // description: '',
    // category: },

  ];

  return knex('stock_items').del()
    .then(() => {
      return knex('stock_items').insert(data);})
    .then(() => {
      return knex.raw("SELECT setval('stock_items_si_id_seq', (SELECT MAX(si_id) FROM stock_items))");
    });
};

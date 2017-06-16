var stockItemArray = [
    {si_id: 14,
    name: 'Hendrick\'s Gin',
    description: 'No other gin taste like Hendrick\'s because no other gin is made like Hendrick\'s. We infuse our gin with the remarkable Bulgarian Rosa Damascena and specially selected cucumbers from the finest producers.',
    category: 3},

    {si_id: 38,
    name: 'Grapefruit Juice',
    description: 'Grapefruit juice is the juice from grapefruits. It is rich in Vitamin C and ranges from sweet-tart to very sour. Variations include white grapefruit, pink grapefruit and ruby red grapefruit juice.',
    category: 9},

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
    description: 'Cruzan Aged Light Rum is a blend of rums aged one to four years in American oak casks—then treated to a filtration process that brings out the full-bodied taste. The light color resembles that of chardonnay, a distinctive indication of its aging. And it’s smooth. Reaaallll smooootthhh.',
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

    {si_id: 12,
    name: 'Bulleit Bourbon',
    description: 'Bulleit Bourbon is inspired by the whiskey pioneered by Augustus Bulleit over 150 years ago. Only ingredients of the very highest quality are used. The subtlety and complexity of Bulleit Bourbon come from its unique blend of rye, corn, and barley malt, along with special strains of yeast and pure Kentucky limestone filtered water. Due to its especially high rye content, Bulleit Bourbon has a bold, spicy character with a finish that\'s distinctively clean and smooth.',
    category: 2},

    {si_id: 13,
    name: 'Bulleit Rye',
    description: 'Bulleit Rye is an award-winning, straight rye whiskey with a character of unparalleled spice and complexity. Released in 2011, it continues to enjoy recognition as one of the highest quality ryes available.',
    category: 2},

    {si_id: 15,
    name: 'Tito\'s Handmade Vodka',
    description: 'Tito\'s Handmade Vodka is produced in Austin at Texas\' oldest legal distillery. We make it in batches, use old-fashioned pot stills, and taste-test every batch. Tito\'s Handmade Vodka is designed to be savored by spirit connoisseurs and everyday drinkers alike. Our process, similar to those used to make fine single malt scotches and high-end French cognacs, requires more skill and effort than others, but it\'s well worth it.',
    category: 4},

    {si_id: 16,
    name: 'Espolon Blanco Tequila',
    description: 'BEST IN SHOW SILVER TEQUILA, DOUBLE GOLD MEDAL 2011 SAN FRANCISCO SPIRITS COMP, 93pts 2011 ULT. SPIRITS CHALLENGE. Highly acclaimed Espolon Tequila returns with a new look. Made from 100% Blue Agave.',
    category: 5},

    {si_id: 17,
    name: 'Remy Martin VSOP',
    description: 'Remy Martin VSOP embodies the perfect harmony of powerful and elegant aromas. It is the symbol of the Cellar Master’s art of blending.',
    category: 6},

    {si_id: 18,
    name: 'Green Chartreuse',
    description: 'Only two Chartreuse monks know the identity of the 130 plants, how to blend them and how to distill them into this world famous liqueur. They are also the only ones who know which plants they have to macerate to produce the natural green and yellow colours. And they alone supervise the slow ageing in oak casks.',
    category: 7},

    {si_id: 19,
    name: 'Carpano Antica Formula',
    description: 'With its unmistakable taste and an increasingly international following, the Italian vermouth par excellence is ideal for making refined, exclusive cocktails. Carpano Antica Formula stands out from all the other vermouths thanks to its unique bouquet and its unmistakable vanilla notes. First invented in 1786 in Turin by Antonio Benedetto Carpano, it has survived in its original inimitable recipe thanks to the love and the skill of Fratelli Branca Distillerie which, with its motto “Novare Serbando”, has been able to preserve the product\'s original qualities and characteristics.',
    category: 8},

    {si_id: 20,
    name: 'Lemon Juice',
    description: 'The lemon, Citrus limon (L.) Osbeck, is a species of small evergreen tree in the flowering plant family Rutaceae, native to Asia. The tree\'s ellipsoidal yellow fruit is used for culinary and non-culinary purposes throughout the world, primarily for its juice, which has both culinary and cleaning uses. The pulp and rind (zest) are also used in cooking and baking. The juice of the lemon is about 5% to 6% citric acid, which gives a sour taste. The distinctive sour taste of lemon juice makes it a key ingredient in drinks and foods.',
    category: 9},

    {si_id: 21,
    name: 'Moet & Chandon Imperial',
    description: 'Moet Imperial is the House\'s iconic champagne. Created in 1869, it embodies Moet & Chandon\'s unique style, a style distinguished by its bright fruitiness, its seductive palate and its elegant maturity.',
    category: 10},

    {si_id: 22,
    name: 'Soda Water',
    description: 'Soda water (also known as club soda, carbonated water, sparkling water, seltzer water, or fizzy water) is water into which carbon dioxide gas under pressure has been dissolved. Some of these have additives, such as sodium chloride, sodium bicarbonate or similar, but seltzer water is almost always composed of water and carbon dioxide with no other additives. This process, known as carbonation, is a process that causes the water to become effervescent. Most carbonated water is sold in ready to drink bottles as carbonated beverages such as soft drinks.',
    category: 11},

    {si_id: 23,
    name: 'Angostura Aromatic Bitters',
    description: '"A cocktail cabinet without Angostura is like a kitchen without salt and pepper.” Angostura aromatic bitters adds a layer of complexity, intensifies the flavor of other ingredients, counteracts the harshness of acidic contents and decreases the harshness of spirits. But it doesn\'t stop there – it also helps cleanse the palate and aid in digestion. Ever had an Old Fashioned, Manhattan, Pink Gin or Mai Tai? Then you’ve experienced Angostura aromatic bitters. It\'s the can\'t-miss bottle behind the bar, featuring an over-sized label and distinct yellow cap.',
    category: 12},

    {si_id: 24,
    name: 'Simple Syrup',
    description: 'A basic sugar-and-water syrup used by bartenders as a sweetener to make cocktails. Simple syrup is made by stirring granulated sugar into hot water in a saucepan until the sugar is dissolved and then cooling the solution. Generally, the ratio of sugar to water can range anywhere from 1:1 to 2:1 by weight, and similarly by volume due to air in the granulated sugar. For pure sucrose the saturation limit is about 5:4 by volume.',
    category: 13},

    {si_id: 25,
    name: 'Lemon Twist',
    description: 'A twist is a piece of citrus zest used as a cocktail garnish, generally for decoration and to add flavor when added to a mixed drink.  There are a variety of ways of making and using twists. Twists are typically cut from a whole fresh fruit with a small kitchen knife immediately prior to serving, although a peeler, citrus zesters, or other utensil may be used. A curled shape may come from cutting the wedge into a spiral, winding it around a straw or other object, or as a byproduct of the cutting. The name may refer to the shape of the garnish, which is typically curled or twisted longitudinally, or else to the act of twisting the garnish to release fruit oils that infuse the drink.Other techniques include running the twist along the rim of the glass, and "flaming" the twist.',
    category: 14},

    {si_id: 26,
    name: 'Ice Sphere',
    description: 'Spherical ice is not used just to impress you. Bartenders use different types of ice for specific purposes, for the most part. A sphere exposes less surface area for the same amount of volume than a cube of ice. The less surface area that is exposed to the warm liquid, the slower the ice will melt. Therefore, a sphere of ice will melt more slowly in a drink than a cube of ice. This way, you can chill the drink without quickly diluting it.',
    category: 15},

    {si_id: 27,
    name: 'Egg White',
    description: 'Egg white is the common name for the clear liquid (also called the albumen or the glair/glaire) contained within an egg. Many of the drinks that use egg whites tend to be acidic, like sours, because the acid in the drink stabilizes the egg protein. This inhibits the proteins them from binding with each other, which makes for smaller bubbles and a better foam. Egg whites also don’t contribute much, if any, flavour to the cocktail.',
    category: 16},

    {si_id: 28,
    name: 'Mint',
    description: 'Mentha (also known as mint, from Greek míntha, is a genus of plants in the family Lamiaceae (mint family). Mints are aromatic, almost exclusively perennial, rarely annual herbs.',
    category: 16},

    {si_id: 29,
    name: 'Lime Juice',
    description: 'The juice of a lime.',
    category: 9},

    {si_id: 30,
    name: 'Orgeat',
    description: 'Almond flavored syrup.',
    category: 13},

    {si_id: 31,
    name: 'Pierre Ferrand Curacao',
    description: 'orange flavored liquor',
    category: 7},

    {si_id: 32,
    name: 'Pineapple Juice',
    description: "Jus d'ananas",
    category: 9},

    {si_id: 33,
    name: 'Campari',
    description: 'The Amaro',
    category: 7},

    {si_id: 34,
    name: 'Luxardo Cocktail Cherry',
    description: 'Deeply red and deeply flavored, these cocktail cherries are a treat in and of themselves.',
    category: 9},

    {si_id: 35,
    name: 'Passion Fruit Syrup',
    description: 'Passion Fruit is native to South America but grown widely in lush climates around the world, resulting in its use in tiki-style and other tropical drinks. It is called for in a Zombie for a true tiki experience!',
    category: 13},

    {si_id: 36,
    name: 'Demerara Sugar',
    description: 'Demerara is a light brown, partially refined, sugar produced from the first crystallization during processing cane juice into sugar crystals - this process is similar to what happens with naturally evaporated cane juice. Demerara has a natural caramel-like flavor; this lends warm, caramel notes to whatever you add the sugar to.',
    category: 16},

    {si_id: 37,
    name: 'Kubler Absinthe',
    description: 'Switzerland, In keeping with the local tradition of clandestine La Bleue, it is crystal clear, has no added sugar. It is very aromatic and has a deep white louche. This absinthe is already the best-seller in Switzerland.',
    category: 7},


    {si_id: 39,
    name: 'Cinnamon Syrup',
    description: 'Add a splash of sweet heat to cocktails like the Zombie with this simple cinnamon syrup.',
    category: 13},

    {si_id: 40,
    name: 'Falernum',
    description: 'A rum-based liqueur made with pure sugar cane, lime, almond, cloves and spices. Very popular for use in tropical cocktails such as Zombie, and in Corn N Oil.',
    category: 7},

    {si_id: 41,
    name: 'Grenadine',
    description: 'Grenadine is a commonly used, pomegranate-based bar syrup, characterized by a flavour that is both tart and sweet, and by a deep red colour.',
    category: 13},

    {si_id: 42,
    name: 'Peychaud\'s Bitters',
    description: 'Peychaud\'s Bitters was originally created around 1830 by Antoine Amédée Peychaud, a Creole apothecary from the French colony of Saint-Domingue (now Haiti) who settled in New Orleans, Louisiana in 1795. It is a gentian-based bitters with a lighter body, sweeter taste, and more floral aroma. Peychaud\'s Bitters is the definitive component of the Sazerac cocktail.',
    category: 12},

    {si_id: 43,
    name: 'Punt e Mes',
    description: 'Punt e Mes (Piedmontese: "point and a half") is an Italian vermouth. It is dark brown in color and has a bitter flavor. The name may refer to the flavor being characterized as one ”point” of sweetness and half a point of bitterness.',
    category: 8},

    {si_id: 44,
    name: 'lime',
    description: 'A lime (from French lime, from Arabic līma, from Persian līmū, "lemon") is a hybrid citrus fruit, which is typically round, lime green, 3–6 centimetres in diameter, and containing acidic juice vesicles.',
    category: 16},

    {si_id: 45,
    name: 'Luxardo Maraschino',
    description: 'The Luxardo Maraschino follows the original recipe from 1821, and requires four years to produce. Cherries are harvested from Luxardo\'s own trees and the solid components are then infused in larchwood vats for three years. The product is distilled in small copper pot stills and aged in Finnish ash wood for the remaining year. Finally, a combination of sugar and water is added before bottling.',
    category: 7},

    {si_id: 46,
    name: 'Dolin Vermouth de Chambery',
    description: 'Dolin Vermouth de Chambery is made of fine wines and includes botanicals found in the Alpine meadows above Chambery and surrounding regions. Together they impart a fresh and elegant nose, with a subtle and complex palate. Ideal as an aperitif or in cocktails.',
    category: 8},

    {si_id: 47,
    name: 'Fee Brothers\' West Indian Orange Bitters',
    description: 'The fine flavor of this product is obtained principally from the skins of oranges grown in the West Indies. ',
    category: 12}
  ];

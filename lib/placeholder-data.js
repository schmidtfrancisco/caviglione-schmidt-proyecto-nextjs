const games = [
  {
    name: 'AjeChess',
    description: 'Classic strategy game for 2 players.',
    images_url: ['GameStore/chess1', 'GameStore/chess2'],
    category: 'Juegos de mesa',
    price: 77700
  },
  {
    name: 'Batalla Naval',
    description: 'Classic strategy game for 2 players.',
    images_url: ['GameStore/batallanaval1', 'GameStore/batallanaval2'],
    category: 'Juegos de mesa',
    price: 422123
  },
  {
    name: 'Catan',
    description: 'Build, trade, and settle in this strategy game for 3-4 players.',
    images_url: ['GameStore/catan1', 'GameStore/catan2'],
    category: 'Juegos de mesa',
    price: 329999
  },
  {
    name: 'Carcassonne',
    description: 'A tile-placement game with medieval landscape for 2-5 players.',
    images_url: ['GameStore/carcassonne1', 'GameStore/carcassonne2'],
    category: 'Juegos de mesa',
    price: 249950
  },
  {
    name: 'Dixit',
    description: 'A storytelling game with beautiful artwork for 3-6 players.',
    images_url: ['GameStore/dixit1', 'GameStore/dixit2'],
    category: 'Juegos de mesa',
    price: 299995
  },
  {
    name: 'Pandemic',
    description: 'Work together to save the world from outbreaks for 2-4 players.',
    images_url: ['GameStore/pandemic1', 'GameStore/pandemic2'],
    category: 'Juegos de mesa',
    price: 349975
  },
  {
    name: 'Azul',
    description: 'A game of tile placement and pattern building for 2-4 players.',
    images_url: ['GameStore/azul1', 'GameStore/azul2'],
    category: 'Juegos de mesa',
    price: 279980
  },
  {
    name: 'Terraforming Mars',
    description: 'Colonize and terraform the red planet for 1-5 players.',
    images_url: ['GameStore/terraformingmars1', 'GameStore/terraformingmars2'],
    category: 'Juegos de mesa',
    price: 529990
  },
  {
    name: '7 Wonders',
    description: 'Build an ancient civilization in this card drafting game for 3-7 players.',
    images_url: ['GameStore/7wonders1', 'GameStore/7wonders2'],
    category: 'Juegos de mesa',
    price: 399960
  },
  {
    name: 'Ticket to Ride',
    description: 'Collect train cards to claim railway routes for 2-5 players.',
    images_url: ['GameStore/tickettoride1', 'GameStore/tickettoride2'],
    category: 'Juegos de mesa',
    price: 359999
  },
  {
    name: 'Splendor',
    description: 'A game of chip-collecting and card development for 2-4 players.',
    images_url: ['GameStore/splendor1', 'GameStore/splendor2'],
    category: 'Juegos de mesa',
    price: 299980
  },
  {
    name: 'Gloomhaven',
    description: 'A cooperative adventure game with tactical combat for 1-4 players.',
    images_url: ['GameStore/gloomhaven1', 'GameStore/gloomhaven2'],
    category: 'Juegos de mesa',
    price: 899999
  },
  {
    name: 'Caballito de troya',
    description: 'Probablemente es solo una escoba.',
    images_url: ['GameStore/stickhorse1', 'GameStore/stickhorse2', 'GameStore/stickhorse3'],
    category: 'Juguetes',
    price: 9999
  },
  {
    name: 'Osito de peluche',
    description: 'Un tierno osito de peluche para los más pequeños.',
    images_url: ['GameStore/teddybear1', 'GameStore/teddybear2', 'GameStore/teddybear3'],
    category: 'Juguetes',
    price: 2999
  },
  {
    name: 'Coche de carreras',
    description: 'Un coche de carreras a escala para los fanáticos de la velocidad.',
    images_url: ['GameStore/racecar1', 'GameStore/racecar2'],
    category: 'Juguetes',
    price: 4999
  },
  {
    name: 'Muñeca de trapo',
    description: 'Una muñeca de trapo hecha a mano.',
    images_url: ['GameStore/doll1', 'GameStore/doll2'],
    category: 'Juguetes',
    price: 1999
  },
	{
    name: 'DIO BRANDO',
    description: 'You thought it was another toy, but it was me! DIO.',
    images_url: ['GameStore/DIO', 'GameStore/DIO2'],
    category: 'Juguetes',
    price: 1867
  },
  {
    name: 'Bloques de construcción',
    description: 'Un set de bloques de construcción para desarrollar la creatividad.',
    images_url: ['GameStore/blocks1', 'GameStore/blocks2'],
    category: 'Juguetes',
    price: 3999
  },
  {
    name: 'Pistola de agua',
    description: 'Perfecta para jugar en el verano y mojar a tus amigos.',
    images_url: ['GameStore/watergun1', 'GameStore/watergun2', 'GameStore/watergun3'],
    category: 'Juguetes',
    price: 1499
  },
  {
    name: 'Rompecabezas 3D',
    description: 'Un desafiante rompecabezas tridimensional.',
    images_url: ['GameStore/3dpuzzle1', 'GameStore/3dpuzzle2'],
    category: 'Juguetes',
    price: 2499
  },
  {
    name: 'Avión a control remoto',
    description: 'Un avión a control remoto para los pequeños pilotos.',
    images_url: ['GameStore/plane1', 'GameStore/plane2'],
    category: 'Juguetes',
    price: 8999
  },
  {
    name: 'Casa de muñecas',
    description: 'Una hermosa casa de muñecas con muebles incluidos.',
    images_url: ['GameStore/dollhouse1', 'GameStore/dollhouse2', 'GameStore/dollhouse3'],
    category: 'Juguetes',
    price: 12999
  },
  {
    name: 'Lego Star Wars',
    description: 'Un set de Lego temático de Star Wars.',
    images_url: ['GameStore/legosw1', 'GameStore/legosw2', 'GameStore/legosw3'],
    category: 'Juguetes',
    price: 7999
  },
  {
    name: 'Juego de té',
    description: 'Un juego de té para que los niños organicen sus propias fiestas.',
    images_url: ['GameStore/tea1', 'GameStore/tea2'],
    category: 'Juguetes',
    price: 2299
  },
  {
    name: 'Minecraft',
    description: 'Juego de mundo abierto',
    images_url: ['GameStore/mc1', 'GameStore/mc2'],
    category: 'Videojuegos',
    price: 412000
  },
  {
    name: 'The Legend of Zelda: Breath of the Wild',
    description: 'Aventura en un mundo abierto lleno de misterio y exploración.',
    images_url: ['GameStore/zelda1', 'GameStore/zelda2'],
    category: 'Videojuegos',
    price: 599900
  },
  {
    name: 'Red Dead Redemption 2',
    description: 'Un épico western de mundo abierto con una narrativa envolvente.',
    images_url: ['GameStore/rdr1', 'GameStore/rdr2'],
    category: 'Videojuegos',
    price: 499900
  },
  {
    name: 'Super Mario Odyssey',
    description: 'Aventura de plataformas en 3D con Mario explorando diversos mundos.',
    images_url: ['GameStore/mario1', 'GameStore/mario2'],
    category: 'Videojuegos',
    price: 549900
  },
  {
    name: 'Cyberpunk 2077',
    description: 'Un RPG de mundo abierto ambientado en una metrópolis futurista.',
    images_url: ['GameStore/cpunk1', 'GameStore/cpunk2'],
    category: 'Videojuegos',
    price: 689900
  },
  {
    name: 'Fortnite',
    description: 'Battle Royale con construcción y combate intensivo.',
    images_url: ['GameStore/fortnite1', 'GameStore/fortnite2'],
    category: 'Videojuegos',
    price: 0
  },
  {
    name: 'The Witcher 3: Wild Hunt',
    description: 'Un RPG de acción en un vasto mundo de fantasía.',
    images_url: ['GameStore/witcher1', 'GameStore/witcher2'],
    category: 'Videojuegos',
    price: 399900
  },
  {
    name: 'Animal Crossing: New Horizons',
    description: 'Simulación de vida en una isla donde puedes personalizar y gestionar tu entorno.',
    images_url: ['GameStore/ac1', 'GameStore/ac2'],
    category: 'Videojuegos',
    price: 599900
  },
  {
    name: 'Among Us',
    description: 'Juego multijugador de deducción social en el que debes encontrar al impostor.',
    images_url: ['GameStore/amogus1', 'GameStore/amogus2'],
    category: 'Videojuegos',
    price: 50000
  },
  {
    name: 'Call of Duty: Modern Warfare',
    description: 'Juego de disparos en primera persona con intensas campañas y multijugador.',
    images_url: ['GameStore/cod1', 'GameStore/cod2'],
    category: 'Videojuegos',
    price: 699900
  },
  {
    name: 'Hades',
    description: 'Roguelike de acción con una narrativa envolvente en el inframundo griego.',
    images_url: ['GameStore/hades1', 'GameStore/hades2'],
    category: 'Videojuegos',
    price: 249900
  }
];


const users = [
	{
		name: 'Admin',
		email: 'admin@admin.com',
		password: 'admin',
	},
];

module.exports = {
  games,
  users,
}
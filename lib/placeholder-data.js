const games = [
  {
    name: 'AjeChess',
    description: 'Classic strategy game for 2 players.',
    images_url: ['https://t.ly/Ia7tG', 'https://t.ly/Ia7tG'],
    category: 'Juegos de mesa',
    price: 777
  },
  {
    name: 'Batalla Naval',
    description: 'Classic strategy game for 2 players.',
    images_url: ['https://t.ly/1wc7d', 'https://t.ly/Ia7tG'],
    category: 'Juegos de mesa',
    price: 4221.23
  },
  {
    name: 'Catan',
    description: 'Build, trade, and settle in this strategy game for 3-4 players.',
    images_url: ['https://t.ly/UQ8x2', 'https://t.ly/Ia7tG'],
    category: 'Juegos de mesa',
    price: 3299.99
  },
  {
    name: 'Carcassonne',
    description: 'A tile-placement game with medieval landscape for 2-5 players.',
    images_url: ['https://t.ly/4i5dK', 'https://t.ly/Ia7tG'],
    category: 'Juegos de mesa',
    price: 2499.50
  },
  {
    name: 'Dixit',
    description: 'A storytelling game with beautiful artwork for 3-6 players.',
    images_url: ['https://t.ly/7bUb1', 'https://t.ly/Ia7tG'],
    category: 'Juegos de mesa',
    price: 2999.95
  },
  {
    name: 'Pandemic',
    description: 'Work together to save the world from outbreaks for 2-4 players.',
    images_url: ['https://t.ly/Ia7tG', 'https://t.ly/Ia7tG'],
    category: 'Juegos de mesa',
    price: 3499.75
  },
  {
    name: 'Azul',
    description: 'A game of tile placement and pattern building for 2-4 players.',
    images_url: ['https://t.ly/Ia7tG', 'https://t.ly/Ia7tG'],
    category: 'Juegos de mesa',
    price: 2799.80
  },
  {
    name: 'Terraforming Mars',
    description: 'Colonize and terraform the red planet for 1-5 players.',
    images_url: ['https://t.ly/Ia7tG', 'https://t.ly/Ia7tG'],
    category: 'Juegos de mesa',
    price: 5299.90
  },
  {
    name: '7 Wonders',
    description: 'Build an ancient civilization in this card drafting game for 3-7 players.',
    images_url: ['https://t.ly/Ia7tG', 'https://t.ly/Ia7tG'],
    category: 'Juegos de mesa',
    price: 3999.60
  },
  {
    name: 'Ticket to Ride',
    description: 'Collect train cards to claim railway routes for 2-5 players.',
    images_url: ['https://t.ly/Ia7tG', 'https://t.ly/Ia7tG'],
    category: 'Juegos de mesa',
    price: 3599.99
  },
  {
    name: 'Splendor',
    description: 'A game of chip-collecting and card development for 2-4 players.',
    images_url: ['https://t.ly/Ia7tG', 'https://t.ly/Ia7tG'],
    category: 'Juegos de mesa',
    price: 2999.80
  },
  {
    name: 'Gloomhaven',
    description: 'A cooperative adventure game with tactical combat for 1-4 players.',
    images_url: ['https://t.ly/Ia7tG', 'https://t.ly/Ia7tG'],
    category: 'Juegos de mesa',
    price: 8999.99
  },
  {
    name: 'Caballito de troya',
    description: 'Probablemente es solo una escoba.',
    images_url: ['https://t.ly/QkCcx', 'https://t.ly/QkCcx'],
    category: 'Juguetes',
    price: 99.99
  },
  {
    name: 'Osito de peluche',
    description: 'Un tierno osito de peluche para los más pequeños.',
    images_url: ['https://t.ly/04UY_', 'https://t.ly/04UY_'],
    category: 'Juguetes',
    price: 29.99
  },
  {
    name: 'Coche de carreras',
    description: 'Un coche de carreras a escala para los fanáticos de la velocidad.',
    images_url: ['https://t.ly/04UY_', 'https://t.ly/04UY_'],
    category: 'Juguetes',
    price: 49.99
  },
  {
    name: 'Muñeca de trapo',
    description: 'Una muñeca de trapo hecha a mano.',
    images_url: ['https://t.ly/04UY_', 'https://t.ly/04UY_'],
    category: 'Juguetes',
    price: 19.99
  },
  {
    name: 'Bloques de construcción',
    description: 'Un set de bloques de construcción para desarrollar la creatividad.',
    images_url: ['https://t.ly/04UY_', 'https://t.ly/04UY_'],
    category: 'Juguetes',
    price: 39.99
  },
  {
    name: 'Pistola de agua',
    description: 'Perfecta para jugar en el verano y mojar a tus amigos.',
    images_url: ['https://t.ly/04UY_', 'https://t.ly/04UY_'],
    category: 'Juguetes',
    price: 14.99
  },
  {
    name: 'Rompecabezas 3D',
    description: 'Un desafiante rompecabezas tridimensional.',
    images_url: ['https://t.ly/04UY_', 'https://t.ly/04UY_'],
    category: 'Juguetes',
    price: 24.99
  },
  {
    name: 'Avión a control remoto',
    description: 'Un avión a control remoto para los pequeños pilotos.',
    images_url: ['https://t.ly/04UY_', 'https://t.ly/04UY_'],
    category: 'Juguetes',
    price: 89.99
  },
  {
    name: 'Casa de muñecas',
    description: 'Una hermosa casa de muñecas con muebles incluidos.',
    images_url: ['https://t.ly/04UY_', 'https://t.ly/04UY_'],
    category: 'Juguetes',
    price: 129.99
  },
  {
    name: 'Lego Star Wars',
    description: 'Un set de Lego temático de Star Wars.',
    images_url: ['https://t.ly/04UY_', 'https://t.ly/04UY_'],
    category: 'Juguetes',
    price: 79.99
  },
  {
    name: 'Juego de té',
    description: 'Un juego de té para que los niños organicen sus propias fiestas.',
    images_url: ['https://t.ly/04UY_', 'https://t.ly/04UY_'],
    category: 'Juguetes',
    price: 22.99
  },
  {
    name: 'Minecraft',
    description: 'Juego de mundo abierto',
    images_url: ['https://t.ly/XLzbu', 'https://t.ly/XLzbu'],
    category: 'Videojuegos',
    price: 4120
  },
  {
    name: 'The Legend of Zelda: Breath of the Wild',
    description: 'Aventura en un mundo abierto lleno de misterio y exploración.',
    images_url: ['https://t.ly/XLzbu', 'https://t.ly/XLzbu'],
    category: 'Videojuegos',
    price: 5999
  },
  {
    name: 'Red Dead Redemption 2',
    description: 'Un épico western de mundo abierto con una narrativa envolvente.',
    images_url: ['https://t.ly/XLzbu', 'https://t.ly/XLzbu'],
    category: 'Videojuegos',
    price: 4999
  },
  {
    name: 'Super Mario Odyssey',
    description: 'Aventura de plataformas en 3D con Mario explorando diversos mundos.',
    images_url: ['https://t.ly/XLzbu', 'https://t.ly/XLzbu'],
    category: 'Videojuegos',
    price: 5499
  },
  {
    name: 'Cyberpunk 2077',
    description: 'Un RPG de mundo abierto ambientado en una metrópolis futurista.',
    images_url: ['https://t.ly/XLzbu', 'https://t.ly/XLzbu'],
    category: 'Videojuegos',
    price: 6899
  },
  {
    name: 'Fortnite',
    description: 'Battle Royale con construcción y combate intensivo.',
    images_url: ['https://t.ly/XLzbu', 'https://t.ly/XLzbu'],
    category: 'Videojuegos',
    price: 0  // Fortnite es gratuito, con compras dentro del juego.
  },
  {
    name: 'The Witcher 3: Wild Hunt',
    description: 'Un RPG de acción en un vasto mundo de fantasía.',
    images_url: ['https://t.ly/XLzbu', 'https://t.ly/XLzbu'],
    category: 'Videojuegos',
    price: 3999
  },
  {
    name: 'Animal Crossing: New Horizons',
    description: 'Simulación de vida en una isla donde puedes personalizar y gestionar tu entorno.',
    images_url: ['https://t.ly/XLzbu', 'https://t.ly/XLzbu'],
    category: 'Videojuegos',
    price: 5999
  },
  {
    name: 'Among Us',
    description: 'Juego multijugador de deducción social en el que debes encontrar al impostor.',
    images_url: ['https://t.ly/XLzbu', 'https://t.ly/XLzbu'],
    category: 'Videojuegos',
    price: 500
  },
  {
    name: 'Call of Duty: Modern Warfare',
    description: 'Juego de disparos en primera persona con intensas campañas y multijugador.',
    images_url: ['https://t.ly/XLzbu', 'https://t.ly/XLzbu'],
    category: 'Videojuegos',
    price: 6999
  },
  {
    name: 'Hades',
    description: 'Roguelike de acción con una narrativa envolvente en el inframundo griego.',
    images_url: ['https://t.ly/XLzbu', 'https://t.ly/XLzbu'],
    category: 'Videojuegos',
    price: 2499
  }
];


const users = [
	{
		name: 'Admin',
		email: 'admin@adminmail.com',
		password: 'admin',
	},
];

module.exports = {
  games,
  users,
}
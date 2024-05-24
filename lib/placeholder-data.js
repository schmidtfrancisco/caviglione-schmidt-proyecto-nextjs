const boardgames = [
  {
    name: 'AjeChess',
    description: 'Classic strategy game for 2 players.',
    imgs: ['https://t.ly/Ia7tG', 'https://t.ly/Ia7tG'],
    category: 'Juego de mesa',
    price: 777
  },
  {
    name: 'Batalla Naval',
    description: 'Classic strategy game for 2 players.',
    imgs: ['https://t.ly/Ia7tG', 'https://t.ly/Ia7tG'],
    category: 'Juego de mesa',
    price: 4221.23
  },
  {
    name: 'Catan',
    description: 'Build, trade, and settle in this strategy game for 3-4 players.',
    imgs: ['https://t.ly/Ia7tG', 'https://t.ly/Ia7tG'],
    category: 'Juego de mesa',
    price: 3299.99
  },
  {
    name: 'Carcassonne',
    description: 'A tile-placement game with medieval landscape for 2-5 players.',
    imgs: ['https://t.ly/Ia7tG', 'https://t.ly/Ia7tG'],
    category: 'Juego de mesa',
    price: 2499.50
  },
  {
    name: 'Dixit',
    description: 'A storytelling game with beautiful artwork for 3-6 players.',
    imgs: ['https://t.ly/Ia7tG', 'https://t.ly/Ia7tG'],
    category: 'Juego de mesa',
    price: 2999.95
  },
  {
    name: 'Pandemic',
    description: 'Work together to save the world from outbreaks for 2-4 players.',
    imgs: ['https://t.ly/Ia7tG', 'https://t.ly/Ia7tG'],
    category: 'Juego de mesa',
    price: 3499.75
  },
  {
    name: 'Azul',
    description: 'A game of tile placement and pattern building for 2-4 players.',
    imgs: ['https://t.ly/Ia7tG', 'https://t.ly/Ia7tG'],
    category: 'Juego de mesa',
    price: 2799.80
  },
  {
    name: 'Terraforming Mars',
    description: 'Colonize and terraform the red planet for 1-5 players.',
    imgs: ['https://t.ly/Ia7tG', 'https://t.ly/Ia7tG'],
    category: 'Juego de mesa',
    price: 5299.90
  },
  {
    name: '7 Wonders',
    description: 'Build an ancient civilization in this card drafting game for 3-7 players.',
    imgs: ['https://t.ly/Ia7tG', 'https://t.ly/Ia7tG'],
    category: 'Juego de mesa',
    price: 3999.60
  },
  {
    name: 'Ticket to Ride',
    description: 'Collect train cards to claim railway routes for 2-5 players.',
    imgs: ['https://t.ly/Ia7tG', 'https://t.ly/Ia7tG'],
    category: 'Juego de mesa',
    price: 3599.99
  },
  {
    name: 'Splendor',
    description: 'A game of chip-collecting and card development for 2-4 players.',
    imgs: ['https://t.ly/Ia7tG', 'https://t.ly/Ia7tG'],
    category: 'Juego de mesa',
    price: 2999.80
  },
  {
    name: 'Gloomhaven',
    description: 'A cooperative adventure game with tactical combat for 1-4 players.',
    imgs: ['https://t.ly/Ia7tG', 'https://t.ly/Ia7tG'],
    category: 'Juego de mesa',
    price: 8999.99
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
  boardgames,
  users,
}
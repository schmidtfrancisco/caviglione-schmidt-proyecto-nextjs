export type Game = {
	id: string;
	name: string;
	description: string;
	img: string;
	category: 'Juego de mesa' | 'Videojuego' | 'Juguete';
	price: number;
};
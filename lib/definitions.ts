export type Game = {
	id: string;
	name: string;
	description: string;
	images_url: string[];
	category: 'Juego de mesa' | 'Videojuego' | 'Juguete';
	price: number;
};

export type DbGame = {
	id: string;
	name: string;
	description: string;
	images_url: string;
	category: 'Juego de mesa' | 'Videojuego' | 'Juguete';
	price: number;
}
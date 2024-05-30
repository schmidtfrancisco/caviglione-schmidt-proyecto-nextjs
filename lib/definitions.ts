export type Game = {
	id: string;
	name: string;
	description: string;
	images_url: string[];
	category: 'Juegos de mesa' | 'Videojuegos' | 'Juguetes';
	price: number;
};

export type User = {
	id: string;
	name: string;
	email: string;
	password: string;
};
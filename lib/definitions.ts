export enum Category{
	JUEGOS_DE_MESA = 'Juegos de mesa',
	VIDEOJUEGOS = 'Videojuegos',
	JUGUETES = 'Juguetes'
}

export type Game = {
	id: string;
	name: string;
	description: string;
	images_url: string[];
	category: Category;
	price: number;
};

export type User = {
	id: string;
	name: string;
	email: string;
	password: string;
};

export type CartItem = {
  game: Game;
  quantity: number;
};

export type Order = {
	id: string;
	name: string;
	lastname: string;
	email: string;
	address: string;
	zip: string;
	addressNumber: number;
	items: CartItem[];
	total: number;
	date: string;
};

export type MPItem = {
	id: string;
	title: string;
	unit_price: number;
	quantity: number;
	picture_url: string;
	description: string;
	currency_id: string;
};


export type OrderItem = {
	order_id?: string;	
	game_id	: string;
	quantity: number;
};

export type OrderStatus = 'Aprobado' | 'Enviado' | 'Entregado' | 'Cancelado';

export type Order = {
	payment_id: string;
	name: string;
	lastname: string;
	email: string;
	address: string;
	zip: string;
	addressNumber: number;
	items: OrderItem[];
	status: OrderStatus;
	total: number;
};

export type OrdersTable = {
	id: number;
	payment_id: string;
	client: string;
	email: string;
	address: string;
	addressnumber: number;
	zip: string;
	total: number;
	status: OrderStatus;
	date: string;
};

export type GameOrdersTable = {
	game_id: string;
	order_id: string;
	quantity: number;
};

export type OrderForm = {
	id: string;
	total: number;
	status: OrderStatus;
};
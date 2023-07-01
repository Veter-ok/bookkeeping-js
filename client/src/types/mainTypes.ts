export interface Card {
	id: number;
	bank_id: number;
	percent: number;
	image: string
	title: string;
	description: string;
}

export interface Account {
	id: number;
	bank_id: number;
	title: string;
	percent: number;
	description: string;
}
export interface Banks {
	name: string;
	money: number;
}

export interface Payment {
	id: number;
	price: number;
	isIncome: boolean;
	info: string;
	date: Date;
	bank: string;
}
export interface Account {
	amount: number;
	type: string
	percent: number;
	dateOpen: Date;
	bank: string;
}

export interface Month {
	month: string;
	income: number;
	expenditure: number;
}

export interface Years {
	[k: string]: Month[] | []
}

export interface Card {
	id: number,
	name: string,
	img: string,
	bank: string,
	percent: number,
	description: string
}

export interface User {
	name: string;
	surname: string;
	birthday: string;
	banks: Array<Banks> | [];
	cards: Array<Card> | []
	accounts: Array<Account> | [];
	years: Years;
	history: Array<Payment> | [];
}
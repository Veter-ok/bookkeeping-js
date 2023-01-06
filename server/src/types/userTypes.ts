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
	id: number, // for user accounts
	idAaccount: number, // for all types of account
	amount: number;
	dateOpen: Date;
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

export interface UserType {
	name: string;
	surname: string;
	birthday: string;
	banks: Array<Banks> | [];
	cards: Array<Card> | []
	accounts: Array<Account> | [];
	years: Years;
	history: Array<Payment> | [];
}
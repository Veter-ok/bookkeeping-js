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

export interface User {
	id: number;
	name: string;
	role: string,
	surname: string;
	email: string;
	password: string;
	birthday: string;
}
export interface Payment {
	id: number;
	price: number;
	isIncome: boolean;
	info: string;
	date: Date;
	bank: string;
}
export interface UserAccount {
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
	title: string,
	image: string,
	bank_id: number,
	percent: number,
	description: string
}

export interface User {
	id: number;
	name: string;
	isAdmin: boolean,
	surname: string;
	email: string;
	birthday: string;
}
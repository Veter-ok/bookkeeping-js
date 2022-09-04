export interface Banks {
	name: string;
	money: number;
}

export interface Payment {
	id: number;
	price: number;
	IsIncome: boolean;
	info: string;
	date: Date;
	bank: string;
}
export interface Account {
	amount: number;
	percent: number;
	date: Date;
	bank: string;
}

export interface Month {
	month:string;
	income: number;
	expenditure: number;
}

export interface Years {
	[k: string]: Month[] | []
}

export interface User {
	name: string;
	surname: string;
	birthday: string;
	banks: Array<Banks> | [];
	accounts: Array<Account> | [];
	years: Years;
	history: Array<Payment> | [];
}
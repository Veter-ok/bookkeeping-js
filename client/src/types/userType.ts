export interface Payment {
	id: number;
	price: number;
	isIncome: boolean;
	info: string;
	date: Date;
	bank: string;
}

export interface UserBank {
	name: string;
	money: number;
}

export interface UserAccount {
	id: number,
	user_id: number,
	type_id: number,
	amount: number,
	dateOpen: Date
}

export interface User {
	id: number;
	name: string;
	isAdmin: boolean,
	surname: string;
	email: string;
	birthday: string;
}
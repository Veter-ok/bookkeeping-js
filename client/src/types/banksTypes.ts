export interface UserBank {
	name: string;
	money: number;
}

export interface Bank {
	bank_id: number,
	name: string
}

export interface BankAccount {
	id: number,
	bank_id: number,
	percent: number,
	term: number, // number of months
	title: string,
	description: string
}
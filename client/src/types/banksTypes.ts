export interface UserBank {
	name: string;
	money: number;
}

export interface Bank {
	id: number,
	name: string
	description?: string
}

export interface BankAccount {
	id: number,
	bank_id: number,
	percent: number,
	term?: number, // number of months
	title: string,
	description: string
}
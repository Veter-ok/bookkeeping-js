export interface UserBank {
	name: string;
	money: number;
}

export interface BanksAccount {
	id: number,
	type: string,
	name: string,
	bank: string,
	percent: number,
	duration: number // number of months
}
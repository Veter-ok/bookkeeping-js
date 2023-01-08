export interface BanksAccount {
	id: number,
	type: string,
	name: string,
	bank: string,
	percent: number,
	duration: number // number of months
}

const TinkoffDepisitOneMonth:BanksAccount = {
	id: 0,
	type: "вклад",
	name: "Вклад на месяц",
	bank: "тинькофф банк",
	percent: 7,
	duration: 1
} 

const TinkoffDepisitThreeMonth:BanksAccount = {
	id: 1,
	type: "вклад",
	name: "Вклад на 3 месяца",
	bank: "тинькофф банк",
	percent: 7,
	duration: 3
} 


export const ACCOUNTS:Array<BanksAccount> = [TinkoffDepisitOneMonth, TinkoffDepisitThreeMonth]
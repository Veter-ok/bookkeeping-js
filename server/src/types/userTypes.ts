export interface Banks {
	id: number;
	name: string;
}

export interface Payment {
	id: number;
	user_id: number;
	account_id: number;
	amount: number;
	category: string;
	date: string
}
export interface UserAccount {
	id: number; // for user accounts
	id_user: number; // for all types of account
	type_id: number; 
	amount: number;
	dateOpen: Date;
}

// export interface Month {
// 	month: string;
// 	income: number;
// 	expenditure: number;
// }

// export interface Years {
// 	[k: string]: Month[] | []
// }

export interface UserCard {
	id: number,
	name: string,
	img: string,
	bank: string,
	percent: number,
	description: string
}

export interface UserType {
	id: number;
	name: string;
	role: string,
	surname: string;
	password: string;
	birthday: string;
}
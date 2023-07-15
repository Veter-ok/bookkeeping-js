export interface Card {
	id: number;
	bank_id: number;
	title: string;
	percent: number;
	image: string
	description: string;
}

export interface Account {
	id: number,
	bank_id: number,
	name: string,
	isCardsAccount?: boolean
	percent: number,
	description: string
}

export interface Bank {
	id: number,
	name: string
	description?: string
}

export interface Month {
	month: string;
	income: number;
	expenditure: number;
}

export interface Years {
	[k: string]: Month[] | []
}
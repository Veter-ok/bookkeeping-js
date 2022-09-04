import { User } from "types/userType"


export var User1: User = {
	name: "Родион",
	surname: "Лавров",
	birthday: "06.03.2006",
	banks: [
		{name: "Альфа Банк", money: 1000000},
		{name: "Тинькофф Банк", money: 100679}
	],
	accounts: [],
	years: {
		"2022": [
			{month: "янв", income: 0, expenditure: 203},
			{month: "фев", income: 0, expenditure: 4141},
			{month: "март", income: 0, expenditure: 9152},
			{month: "апр", income: 0, expenditure: 3600},
			{month: "май", income: 0, expenditure: 2312},
			{month: "июнь", income: 0, expenditure: 6041},
			{month: "июль", income: 0, expenditure: 5300},
			{month: "авг", income: 1832.75, expenditure: 5052},
			{month: "сен", income: 0, expenditure: 0},
			{month: "окт", income: 0, expenditure: 0},
			{month: "нояб", income: 0, expenditure: 0},
			{month: "дек", income: 0, expenditure: 0}
		],
		"2021": [
			{month: "янв", income: 0, expenditure: 0},
			{month: "фев", income: 0, expenditure: 0},
			{month: "март", income: 0, expenditure: 0},
			{month: "апр", income: 0, expenditure: 0},
			{month: "май", income: 0, expenditure: 0},
			{month: "июнь", income: 0, expenditure: 0},
			{month: "июль", income: 0, expenditure: 0},
			{month: "авг", income: 0, expenditure: 0},
			{month: "сен", income: 0, expenditure: 0},
			{month: "окт", income: 0, expenditure: 0},
			{month: "нояб", income: 0, expenditure: 0},
			{month: "дек", income: 0, expenditure: 0},
		]
	},
	history: [
		{id: 1, price: 200000, IsIncome: true, info:"Зарплата", date: new Date(), bank: "Тинькофф Банк"},
		{id: 2, price: 8000, IsIncome: false, info:"Налоги", date: new Date(), bank: "Тинькофф Банк"},
		{id: 3, price: 15000, IsIncome: false, info:"Машина", date: new Date(), bank: "Тинькофф Банк"},
		{id: 4, price: 10000, IsIncome: true, info:"Проценты", date: new Date(), bank: "Тинькофф Банк"},
		{id: 5, price: 20000, IsIncome: false, info:"Одежда", date: new Date(), bank: "Альфа Банк"},
		{id: 6, price: 8000, IsIncome: false, info:"Продукты", date: new Date(), bank: "Альфа Банк"}
	]
}

export var User2: User = {
	name: "Родион",
	surname: "Лавров",
	birthday: "06.03.2006",
	banks: [
		{name: "Альфа Банк", money: 0},
		{name: "Тинькофф Банк", money: 0}
	], 
	accounts: [],
	years: {
		"2022": [
			{month: "янв", income: 0, expenditure: 0},
			{month: "фев", income: 0, expenditure: 0},
			{month: "март", income: 0, expenditure: 0},
			{month: "апр", income: 0, expenditure: 0},
			{month: "май", income: 0, expenditure: 0},
			{month: "июнь", income: 0, expenditure: 0},
			{month: "июль", income: 0, expenditure: 0},
			{month: "авг", income: 0, expenditure: 0},
			{month: "сен", income: 0, expenditure: 0},
			{month: "окт", income: 0, expenditure: 0},
			{month: "нояб", income: 0, expenditure: 0},
			{month: "дек", income: 0, expenditure: 0},
		],
	},
	history: []
}
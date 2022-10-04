import { User } from "types/userType"


export var User1: User = {
	name: "Родион",
	surname: "Лавров",
	birthday: "06.03.2006",
	banks: [
		{name: "Альфа Банк", money: 0},
		{name: "Тинькофф Банк", money: 12018.07}
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
			{month: "сен", income: 12822.07, expenditure: 804},
			{month: "окт", income: 0, expenditure: 0},
			{month: "нояб", income: 0, expenditure: 0},
			{month: "дек", income: 0, expenditure: 0},
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
		{id: 6, price: 2138, isIncome: true, info: "Другое", date: new Date("11.09.2022"), bank: "Тинькофф Банк"},
		{id: 5, price: 466, isIncome: false, info: "Еда", date: new Date("11.09.2022"), bank: "Тинькофф Банк"},
		{id: 4, price: 200, isIncome: false, info: "Еда", date: new Date("11.09.2022"), bank: "Тинькофф Банк"},
		{id: 3, price: 138, isIncome: false, info: "Транспорт", date: new Date("11.09.2022"), bank: "Тинькофф Банк"},
		{id: 2, price: 684.07, isIncome: true, info: "Проценты", date: new Date("10.09.2022"), bank: "Тинькофф Банк"},
		{id: 1, price: 10000, isIncome: true, info: "Другое", date: new Date("05.09.2022"), bank: "Тинькофф Банк"}
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
			{month: "янв", income: 120000, expenditure: 70000},
			{month: "фев", income: 200000, expenditure: 123000},
			{month: "март", income: 129500, expenditure: 56500},
			{month: "апр", income: 134000, expenditure: 45000},
			{month: "май", income: 103600, expenditure: 74700},
			{month: "июнь", income: 100500, expenditure: 54300},
			{month: "июль", income: 90000, expenditure: 46700},
			{month: "авг", income: 142500, expenditure: 54000},
			{month: "сен", income: 123000, expenditure: 110000},
			{month: "окт", income: 0, expenditure: 0},
			{month: "нояб", income: 0, expenditure: 0},
			{month: "дек", income: 0, expenditure: 0},
		],
	},
	history: [
		{id: 1, price: 12000, isIncome: true, info: "Проценты", date: new Date("10.09.2022"), bank: "Тинькофф Банк"}
	]
}
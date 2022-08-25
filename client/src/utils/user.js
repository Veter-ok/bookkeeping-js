export var User1 = {
	name: "Родион",
	surname: "Лавров",
	birthday: "06.03.2006",
	banks: [
		{name: "Альфа Банк", totalMoney: 1000000},
		{name: "Тинькофф Банк", totalMoney: 100679}
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
		{price: 200000, IsIncome: true, info:"Зарплата", date: new Date(), bank: "Тинькофф Банк"},
		{price: 8000, IsIncome: false, info:"Налоги", date: new Date(), bank: "Тинькофф Банк"},
		{price: 15000, IsIncome: false, info:"Машина", date: new Date(), bank: "Тинькофф Банк"},
		{price: 10000, IsIncome: true, info:"Проценты", date: new Date(), bank: "Тинькофф Банк"},
		{price: 20000, IsIncome: false, info:"Одежда", date: new Date(), bank: "Альфа Банк"},
		{price: 8000, IsIncome: false, info:"Продукты", date: new Date(), bank: "Альфа Банк"}
	]
}

export var User2 = {
	name: "Родион",
	surname: "Лавров",
	birthday: "06.03.2006",
	banks: [
		{name: "Альфа Банк", totalMoney: 0},
		{name: "Тинькофф Банк", totalMoney: 0}
	], 
	years: {
		"2022": [
			{month: "янв", total: 0, income: 0, expenditure: 0},
			{month: "фев", total: 0, income: 0, expenditure: 0},
			{month: "март", total: 0, income: 0, expenditure: 0},
			{month: "апр", total: 0, income: 0, expenditure: 0},
			{month: "май", total: 0, income: 0, expenditure: 0},
			{month: "июнь", total: 0, income: 0, expenditure: 0},
			{month: "июль", total: 0, income: 0, expenditure: 0},
			{month: "авг", total: 0, income: 0, expenditure: 0},
			{month: "сен", total: 0, income: 0, expenditure: 0},
			{month: "окт", total: 0, income: 0, expenditure: 0},
			{month: "нояб", total: 0, income: 0, expenditure: 0},
			{month: "дек", total: 0, income: 0, expenditure: 0},
		],
	},
	history: []
}
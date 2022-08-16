export var User = {
	mainData: {
		name: "Родион",
		surname: "Лавров",
		birthday: "06.03.2006"
	}, 
	banks: [
		{
			name: "Альфа Банк",
			totalMoney: 1000000
		},
		{
			name: "Тинькофф Банк",
			totalMoney: 5000000
		}
	],
	monthly: [
		{month: "сен", money: 100000},
		{month: "окт", money: 200000},
		{month: "нояб", money: 350000},
		{month: "дек", money: 50000},
		{month: "янв", money: 68000},
		{month: "фев", money: 23000},
		{month: "март", money: 234000},
	],
	history: [
		{price: 1000, IsIncome: true, info:"Зарплата", date:"16.07.22"},
		{price: 5000, IsIncome: false, info:"Налоги", date:"16.07.22"},
		{price: 3000, IsIncome: false, info:"Машина", date:"16.07.22"},
		{price: 5000, IsIncome: true, info:"Банки", date:"16.07.22"},
		{price: 500, IsIncome: false, info:"Одежда", date:"16.07.22"}
	]
}
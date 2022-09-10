import { UserState, UserAction} from "store/types/user"
import {createSlice} from '@reduxjs/toolkit'



const initialState:UserState = {
	Auth: false,
	name: "",
	surname: "",
	birthday: ""
	// user: {
	// 	name: "Родион",
	// 	surname: "Лавров",
	// 	birthday: "06.03.2006",
	// 	banks: [
	// 		{name: "Альфа Банк", money: 1000000},
	// 		{name: "Тинькофф Банк", money: 100679}
	// 	],
	// 	accounts: [],
	// 	years: {
	// 		"2022": [
	// 			{month: "янв", income: 0, expenditure: 203},
	// 			{month: "фев", income: 0, expenditure: 4141},
	// 			{month: "март", income: 0, expenditure: 9152},
	// 			{month: "апр", income: 0, expenditure: 3600},
	// 			{month: "май", income: 0, expenditure: 2312},
	// 			{month: "июнь", income: 0, expenditure: 6041},
	// 			{month: "июль", income: 0, expenditure: 5300},
	// 			{month: "авг", income: 1832.75, expenditure: 5052},
	// 			{month: "сен", income: 0, expenditure: 0},
	// 			{month: "окт", income: 0, expenditure: 0},
	// 			{month: "нояб", income: 0, expenditure: 0},
	// 			{month: "дек", income: 0, expenditure: 0}
	// 		],
	// 		"2021": [
	// 			{month: "янв", income: 0, expenditure: 0},
	// 			{month: "фев", income: 0, expenditure: 0},
	// 			{month: "март", income: 0, expenditure: 0},
	// 			{month: "апр", income: 0, expenditure: 0},
	// 			{month: "май", income: 0, expenditure: 0},
	// 			{month: "июнь", income: 0, expenditure: 0},
	// 			{month: "июль", income: 0, expenditure: 0},
	// 			{month: "авг", income: 0, expenditure: 0},
	// 			{month: "сен", income: 0, expenditure: 0},
	// 			{month: "окт", income: 0, expenditure: 0},
	// 			{month: "нояб", income: 0, expenditure: 0},
	// 			{month: "дек", income: 0, expenditure: 0},
	// 		]
	// 	},
	// 	history: [
	// 		{id: 1, price: 200000, IsIncome: true, info:"Зарплата", date: new Date(), bank: "Тинькофф Банк"},
	// 		{id: 2, price: 8000, IsIncome: false, info:"Налоги", date: new Date(), bank: "Тинькофф Банк"},
	// 		{id: 3, price: 15000, IsIncome: false, info:"Машина", date: new Date(), bank: "Тинькофф Банк"},
	// 		{id: 4, price: 10000, IsIncome: true, info:"Проценты", date: new Date(), bank: "Тинькофф Банк"},
	// 		{id: 5, price: 20000, IsIncome: false, info:"Одежда", date: new Date(), bank: "Альфа Банк"},
	// 		{id: 6, price: 8000, IsIncome: false, info:"Продукты", date: new Date(), bank: "Альфа Банк"}
	// 	]
	// }
}

// export const userReducer = (state = initialState, action: UserAction): UserState => {
// 	switch (action.type){
// 		case UserActionsTypes.FETCH_USER:
// 			return {loading: true, error: null, user: []}
// 		case UserActionsTypes.FETCH_USER_SUCCESS:
// 			return {loading: true, error: null, user: action.payload}
// 		case UserActionsTypes.FETCH_USER_FAIL:
// 			return {loading: true, error: action.payload, user: []}
// 		default:
// 			return state
// 	}
// }

const userSlice = createSlice({
	name: 'user',
	initialState,
	reducers: {
		login: (state, action) => {
			state.Auth = action.payload.Auth
			state.name = action.payload.name
			state.surname = action.payload.surname
			state.birthday = action.payload.birthday
		},
	}
})

export default userSlice.reducer
export const {login} = userSlice.actions
export const selectName = (state:any) => state.user.name
export const selectSurname = (state:any) => state.user.surname
export const selectBirthday = (state:any) => state.user.birthday
export const selectAuth = (state:any) => state.user.Auth
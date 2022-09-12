import {createSlice} from '@reduxjs/toolkit'
import { PaymentState } from "store/types/payment"

const initialState:PaymentState = {
	banks: null,
	accounts: null,
	years: null,
	history: null
}

const paymentSlice = createSlice({
	name: 'payment',
	initialState,
	reducers: {
		loginPayment: (state:PaymentState, action) => {
			state.banks = action.payload.banks
			state.accounts = action.payload.accounts
			state.years = action.payload.years
			state.history = action.payload.history
		},
		addIncomePayment: (state:PaymentState, action) => {
			let year:number = action.payload.date.getFullYear()
			let month:number = action.payload.date.getMonth()
			state.history = [action.payload, ...state.history]
			state.years[year][month].income +=  action.payload.price
			for (var index = 0; index < state.banks.length; index++) {
				if (state.banks[index].name === action.payload.bank){
					state.banks[index].money += action.payload.price
					break
				}
			}
		},
		addExpenditurePayment: (state:PaymentState, action) => {
			let year:number = action.payload.date.getFullYear()
			let month:number = action.payload.date.getMonth()
			state.history = [action.payload, ...state.history]
			state.years[year][month].expenditure +=  action.payload.price
			for (var index = 0; index < state.banks.length; index++) {
				if (state.banks[index].name === action.payload.bank){
					state.banks[index].money -= action.payload.price
					break
				}
			}
		},
		AddAccountPayment: (state:PaymentState, action) => {
			let year:number = action.payload.dateOpen.getFullYear()
			let month:number = action.payload.dateOpen.getMonth()
			state.years[year][month].income +=  action.payload.amount
			for (var index = 0; index < state.banks.length; index++) {
				if (state.banks[index].name === action.payload.bank){
					state.banks[index].money += action.payload.amount
					break
				}
			}
			state.accounts = [action.payload, ...state.accounts]
		},
		deletePayment: (state:PaymentState, action) => {
			let year:number = action.payload.date.getFullYear()
			let month:number = action.payload.date.getMonth()
			console.log(action.payload)
			if (action.payload.isIncome){
				state.years[year][month].income -=  action.payload.price
			}else{
				state.years[year][month].expenditure -= action.payload.price
			}
			for (let index = 0; index < state.history.length; index++) {
				if (state.history[index].id === action.payload.id){
					state.history.splice(index, 1)
					break
				}
			}
			for (let index = 0; index < state.banks.length; index++) {
				if (state.banks[index].name === action.payload.bank){
					state.banks[index].money -= action.payload.price
					break
				}
			}
		}
	}
})

export default paymentSlice.reducer
export const {loginPayment, addIncomePayment, addExpenditurePayment, AddAccountPayment, deletePayment} = paymentSlice.actions
export const selectBanks = (state:any) => state.payment.banks
export const selectAccounts = (state:any) => state.payment.accounts
export const selectYears = (state:any) => state.payment.years
export const selectHistory = (state:any) => state.payment.history
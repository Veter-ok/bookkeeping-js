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
		loginPayment: (state, action) => {
			state.banks = action.payload.banks
			state.accounts = action.payload.accounts
			state.years = action.payload.years
			state.history = action.payload.history
		},
		addIncomePayment: (state, action) => {
			console.log(action.payload)
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
		addExpenditurePayment: (state, action) => {
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
		AddAccountPayment: (state, action) => {
			state.accounts = [action.payload, ...state.accounts]
		},
		deletePayment: (state, action) => {
			state.history.splice(action.payload, 1)
		}
	}
})

export default paymentSlice.reducer
export const {loginPayment, addIncomePayment, addExpenditurePayment, AddAccountPayment, deletePayment} = paymentSlice.actions
export const selectBanks = (state:any) => state.payment.banks
export const selectAccounts = (state:any) => state.payment.accounts
export const selectYears = (state:any) => state.payment.years
export const selectHistory = (state:any) => state.payment.history
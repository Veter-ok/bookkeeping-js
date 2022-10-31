import {createSlice, PayloadAction} from '@reduxjs/toolkit'
import { RootState } from 'store'
import { Account, Card, Payment, Banks, Years} from 'types/userType'
import { ACCOUNTS } from 'utils/accounts'
import { getByID } from 'utils/getData'

const initialState:PaymentState = {
	banks: [],
	accounts: [],
	cards: [],
	years: null,
	history: []
}

interface PaymentState {
	banks: Array<Banks> | null,
	cards: Array<Card> | null,
	accounts: Array<Account>  | null,
	years: Years | null,
	history: Array<Payment> | null,
}

const paymentSlice = createSlice({
	name: 'payment',
	initialState,
	reducers: {
		loginPayment: (state:PaymentState, action: PayloadAction<PaymentState>) => {
			state.banks = action.payload.banks
			state.accounts = action.payload.accounts
			state.years = action.payload.years
			state.history = action.payload.history
		},
		addIncomePayment: (state:PaymentState, action: PayloadAction<Payment>) => {
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
		addExpenditurePayment: (state:PaymentState, action: PayloadAction<Payment>) => {
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
		AddAccountPayment: (state:PaymentState, action: PayloadAction<Account>) => {
			let year:number = action.payload.dateOpen.getFullYear()
			let month:number = action.payload.dateOpen.getMonth()
			console.log(state.years[year][month].income, typeof action.payload.amount)
			state.years[year][month].income +=  action.payload.amount
			for (var index = 0; index < state.banks.length; index++) {
				if (state.banks[index].name === getByID(ACCOUNTS, action.payload.idAaccount).bank){
					state.banks[index].money += action.payload.amount
					break
				}
			}
			state.accounts = [action.payload, ...state.accounts]
		},
		deletePayment: (state:PaymentState, action: PayloadAction<Payment>) => {
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
		},
		addCard: (state: PaymentState, action: PayloadAction<Card>) => {
			state.cards = [action.payload, ...state.cards]
		}
	}
})


export default paymentSlice.reducer
export const {loginPayment, addIncomePayment, addExpenditurePayment, AddAccountPayment, deletePayment, addCard} = paymentSlice.actions
export const selectBanks = (state:RootState) => state.payment.banks
export const selectAccounts = (state:RootState) => state.payment.accounts
export const selectYears = (state:RootState) => state.payment.years
export const selectHistory = (state:RootState) => state.payment.history
export const selectCards = (state:RootState) => state.payment.cards
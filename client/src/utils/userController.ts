import { Account, Payment } from 'types/userType'
import {User1, User2} from './user'

export const Add = (payment: Payment) => {
	let year:number = payment.date.getFullYear()
	let month:number = payment.date.getMonth()
	User1.history = [payment, ...User1.history]
	User1.years[year][month].income +=  payment.price
	for (var index = 0; index < User1.banks.length; index++) {
		if (User1.banks[index].name === payment.bank){
			User1.banks[index].money += payment.price
			break
		}
	}
	console.log(User1)
}

export const Subtract = (payment: Payment) => {
	let year:number = payment.date.getFullYear()
	let month:number = payment.date.getMonth()
	User1.history = [payment, ...User1.history]
	User1.years[year][month].expenditure +=  payment.price
	for (var index = 0; index < User1.banks.length; index++) {
		if (User1.banks[index].name === payment.bank){
			User1.banks[index].money -= payment.price
			break
		}
	}
	console.log(User1)
}

export const AddAccount = (data: Account) => {
	User1.accounts = [data, ...User1.accounts]
	console.log(User1)
}

export const deletePayment = (index: number) => {
	User1.history.splice(index, 1)
	console.log(User1.history)
}
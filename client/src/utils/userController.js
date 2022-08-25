import {User1, User2} from './user'

export const Add = (payment) => {
	let year = payment.date.getFullYear()
	let month = payment.date.getMonth()
	User1.history = [payment, ...User1.history]
	User1.years[year][month].total +=  payment.price
	for (var index = 0; index < User1.banks.length; index++) {
		if (User1.banks[index].name === payment.bank){
			User1.banks[index].totalMoney += payment.price
			break
		}
	}
	console.log(User1)
}

export const Subtract = (payment) => {
	let year = payment.date.getFullYear()
	let month = payment.date.getMonth()
	User1.history = [payment, ...User1.history]
	User1.years[year][month].total -=  payment.price
	for (var index = 0; index < User1.banks.length; index++) {
		if (User1.banks[index].name === payment.bank){
			User1.banks[index].totalMoney -= payment.price
			break
		}
	}
	console.log(User1)
}

export const AddAccount = (data) => {
	User1.accounts = [data, ...User1.accounts]
	console.log(User1)
}
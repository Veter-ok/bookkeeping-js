import { Bank, BankAccount } from "types/banksTypes"

export const getFields = (array:Array<any>, field:string) => {
	let output = []
	for (var i=0; i < array.length ; ++i)
		output.push(array[i][field])
	return output
}

export const getAccountByID = (array:Array<BankAccount>, id: number) => {
	for (var i = 0; i < array.length; i++){
		if (array[i].id === id){
			return array[i]
		}
	}
	return null
}

export const getBankByID = (array:Bank[] | any[], id: number) => {
	console.log(array, id)
	for (var i = 0; i < array.length; i++){
		if (array[i].bank_id === id){
			return array[i]
		}
	}
	return null
}
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

export const getBankByID = (array:Bank[] | any[], id: number):null|Bank => {
	for (var i = 0; i < array.length; i++){
		if (array[i].id === id){
			return array[i]
		}
	}
	return null
}

export const getBankIdByName = (array:Bank[], name: string) => { 
	for (var i = 0; i < array.length; i++){
		if (array[i].name === name){
			console.log(array[i])
			return array[i].id
		}
	}
	return null
}
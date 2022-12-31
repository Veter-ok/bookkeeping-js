import { BanksAccount } from "types/banksTypes"

export const getFields = (array:Array<any>, field:string) => {
	let output = []
	for (var i=0; i < array.length ; ++i)
		output.push(array[i][field])
	return output
}

export const getByID = (array:Array<BanksAccount>, id: number) => {
	for (var i = 0; i < array.length; i++){
		if (array[i].id === id){
			return array[i]
		}
	}
	return null
}
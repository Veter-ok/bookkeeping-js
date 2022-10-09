export const getFields = (array:Array<any>, field:string) => {
	let output = []
	for (var i=0; i < array.length ; ++i)
		output.push(array[i][field])
	return output
}
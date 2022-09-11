export const priceConverter = (dafeultPrice: string) => {
	const price:string = Number(dafeultPrice).toString()
	let finallyPrice:string = ''
	let lengthNow:number = price.length
	for (var index = 0; index < price.length; index++) {
		finallyPrice += price[index]
		lengthNow -= 1
		if (lengthNow % 3 === 0 && lengthNow !== 0){
			if (price[index] !== "-"){
				if (price[index + 1] !== "." && price[index + 2] !== "."){
					finallyPrice += ','
				}else{
					finallyPrice += price.slice(index + 1, price.length)
					break
				}
			}
		}
	}
	return finallyPrice
}
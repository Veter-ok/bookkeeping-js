export const priceConverter = (dafeultPrice, unit="₽") => {
	const price = dafeultPrice.toString()
	let finallyPrice = ''
	let lengthNow = price.length
	for (var index = 0; index < price.length; index++) {
		finallyPrice += price[index]
		lengthNow -= 1
		if (lengthNow % 3 === 0 && lengthNow !== 0){
			finallyPrice += ","
		}
	}
	return finallyPrice
}
export const totalSum = (years) => {
	let answer = 0
	for (let year in years) {
		for (let month in years[year]) {
			answer += years[year][month].income - years[year][month].expenditure
		}
	}
	return answer
}

export const totalYear = (year) => {
	let answer = 0
	for (let month in year[year]) {
		answer += year[month].total
	}
	return answer
}

export const totalMonth = (history) => {
	let answer = 0
	for (let payment in history) {
		answer += payment.price
	}
	return answer
}
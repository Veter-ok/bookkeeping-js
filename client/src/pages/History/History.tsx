import './history.scss'
import React, {FunctionComponent as FC, useState} from 'react'
import { Payment } from 'types/userType'
import { Container } from '../../components/Containers/container'
import { PriceList } from '../../components/ui/Lists/priceList/priceList'
import {Button} from '../../components/ui/Buttons/button'
import {Input} from '../../components/ui/Input/input'
import {useSelector} from 'react-redux'
import { selectHistory, selectYears } from 'store/slices/paymentSlice'

export const History:FC = () => {
	const [searchValue, setSearchValue] = useState('')
	const years = useSelector(selectYears)
	const history = useSelector(selectHistory)

	const currentlyPayments = history.filter((payment: Payment) => {
		if (payment.price.toString().includes(searchValue)){
			return true
		}else if(payment.date.toLocaleDateString().includes(searchValue)){
			return true
		}else if (payment.bank.toLowerCase().includes(searchValue.toLowerCase())){
			return true
		}else {
			return payment.info.toLowerCase().includes(searchValue.toLowerCase())
		}
	})
	console.log(years)

	return (
		<div>
			<Container title="Последние платежи">
				<Input text="Поиск данных по сумме/дате/банку" type="text" value={searchValue} onChange={setSearchValue}/>
				<PriceList full={true} data={currentlyPayments}/>
				<Button text="Что-то" onClick={() => console.log("click")}/>
			</Container>
		</div>
	)
}
import './history.scss'
import { Container } from '../../components/Containers/container'
import { PriceList } from '../../components/ui/Lists/priceList/priceList'
import {ButtonMain} from '../../components/ui/Buttons/buttonMain'
import {Input} from '../../components/ui/Input/input'
import { useState } from 'react'
import { User1, User2 } from '../../utils/user'

export const History = () => {
	const [searchValue, setSearchValue] = useState('')

	const currentlyPayments = User1.history.filter(payment => {
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

	return (
		<div>
			<Container title="Последние платежи">
				<Input text="Поиск данных по сумме/дате/банку" value={searchValue} onChange={setSearchValue}/>
				<PriceList full={true} data={currentlyPayments}/>
				<ButtonMain text="Что-то"/>
			</Container>
		</div>
	)
}
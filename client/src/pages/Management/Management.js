import './management.scss'
import {useState} from 'react'
import {User} from '../../utils/user'
import { priceConverter } from '../../utils/priceConverter'
import {Container} from '../../components/Container/container'
import {BankBlock} from '../../components/ui/Blocks/BankBlock/bankBlock'
import {ButtonMain} from '../../components/ui/Buttons/buttonMain'
import {Input} from '../../components/ui/Input/input'
import {Select} from '../../components/ui/Select/select'

export const Management = () => {
	const [incomeValue, setIncomeValue] = useState(0)
	const [expenditureValue, setExpenditureValue] = useState(0)

	const addIncome = (event) => {
		if (incomeValue !== 0){
			User.history = [({price: Number(incomeValue), IsIncome: true, info:"Зарплата", date: "16.07.22"}), ...User.history]
			setIncomeValue(0)
		}
	}

	const addExpenditure = () => {
		if (expenditureValue !== 0){
			User.history = [({price: Number(expenditureValue), IsIncome: false, info:"Зарплата", date: "16.07.22"}), ...User.history]
			setExpenditureValue(0)
		}
	}

	return (
		<div>
			<div className="management-container-group">
				<Container id="container-1" title="Лавров Родион">
				</Container>
				<Container id="container-2" title="Ваши банки">
					<div className="container__content">
						{User.banks.map(data => 
							<BankBlock name={data.name} money={priceConverter(data.totalMoney)}/>
						)}
					</div>
				</Container>
				<Container id="container-3" title="Добавить доход">
					<div className="container__content">
						<Input value={incomeValue} onChange={setIncomeValue} text="Сумма"/>
						<Select text="Банк" options={User.banks}/>
						<ButtonMain text="Добавить" onClick={() => addIncome()}/>
					</div>
				</Container>
				<Container id="container-4" title="Добавить расход">
					<div className="container__content">
						<Input value={expenditureValue} onChange={setExpenditureValue} text="Сумма"/>
						<Select text="Банк" options={User.banks}/>
						<ButtonMain text="Добавить" onClick={() => addExpenditure()}/>
					</div>
				</Container>
			</div>
		</div>
	)
}
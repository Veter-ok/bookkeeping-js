import './management.scss'
import {useState} from 'react'
import {Add, AddAccount, Subtract} from '../../utils/userController'
import {User1, User2} from '../../utils/user'
import {Container} from '../../components/Containers/container'
import { BankList } from '../../components/ui/Lists/BanksList/BankList'
import {ButtonMain} from '../../components/ui/Buttons/buttonMain'
import { InputDate } from '../../components/ui/Input/inputDate'
import {Input} from '../../components/ui/Input/input'
import {Select} from '../../components/ui/Select/select'

export const Management = () => {
	// -------------------
	const [incomeValue, setIncomeValue] = useState("")
	const [incomeDate, setIncomeDate] = useState(new Date())
	const [incomeBank, setIncomeBank]= useState(User2.banks[0].name)
	// -------------------
	const [expenditureValue, setExpenditureValue] = useState("")
	const [expenditureDate, setExpenditureDate] = useState(new Date())
	const [expenditureBank, setExpenditureBank]= useState(User2.banks[0].name)
	// -------------------
	const [baseAmount, setBaseAmount] = useState("")
	const [accountPercent, setAccountPercent] = useState("")
	const [accountOpenDate, setAccountOpenDate] = useState(new Date())
	const [accountBank, setAccountBank] = useState("")

	const addIncome = () => {
		if (incomeValue !== 0 && incomeValue !== ""){
			const newData = {
				price: Number(incomeValue),
				IsIncome: true,
				info: "Зарплата",
				date: new Date(incomeDate),
				bank: incomeBank
			}
			Add(newData)
			setIncomeValue(0)
		}
	}

	const addExpenditure = () => {
		if (expenditureValue !== 0 && expenditureValue !== ""){
			const newData = {
				price: Number(expenditureValue),
				IsIncome: false,
				info: "Налоги",
				date: new Date(expenditureDate),
				bank: expenditureBank
			}
			Subtract(newData)
			setExpenditureValue(0)
		}
	}

	const addAccount = () => {
		const newData = {
			amount: Number(baseAmount),
			percent: Number(accountPercent),
			dateOpen: new Date(accountOpenDate),
			bank: accountBank
		}
		AddAccount(newData)
		setBaseAmount(0)
		setAccountPercent(0)
	}

	return (
		<div>
			<div className="management-container-group">
				<Container id="container-1" title={`${User1.surname} ${User1.name}`}>
				</Container>
				<Container id="container-2" title="Добавить доход">
					<Input text="Сумма" type="number" value={incomeValue} onChange={setIncomeValue} />
					<InputDate  value={incomeDate} onChange={setIncomeDate}/>
					<Select onChange={setIncomeBank} text="Банк" options={User2.banks}/>
					<ButtonMain text="Добавить" onClick={() => addIncome()}/>
				</Container>
				<Container id="container-3" title="Добавить расход">
					<Input text="Сумма" type="number" value={expenditureValue} onChange={setExpenditureValue}/>
					<InputDate value={expenditureDate} onChange={setExpenditureDate}/>
					<Select onChange={setExpenditureBank} text="Банк" options={User2.banks}/>
					<ButtonMain text="Добавить" onClick={() => addExpenditure()}/>
				</Container>
				<Container id="container-4" title="Открыть счёт">
					<Input text="Сумма" type="number" value={baseAmount} onChange={setBaseAmount}/>
					<Input text="Процент" type="number" value={accountPercent} onChange={setAccountPercent}/>
					<InputDate value={accountOpenDate} onChange={setAccountOpenDate}/>
					<Select onChange={setAccountBank} text="Банк" options={User2.banks}/>
					<ButtonMain text="Открыть" onClick={() => addAccount()}/>
				</Container>
			</div>
		</div>
	)
}
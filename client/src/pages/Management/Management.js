import './management.scss'
import {useState} from 'react'
import { expenditureTypes, incomeTypes } from 'types/typesOfPayments'
import {Container} from '../../components/Containers/container'
import {Button} from '../../components/ui/Buttons/button'
import { InputDate } from '../../components/ui/Input/inputDate'
import {Input} from '../../components/ui/Input/input'
import {Select} from '../../components/ui/Select/select'
import {useDispatch, useSelector} from 'react-redux'
import {selectName, selectSurname} from 'store/slices/userSlice'
import { AddAccountPayment, addExpenditurePayment, addIncomePayment, selectBanks, selectHistory } from 'store/slices/paymentSlice'


export const Management = () => {
	const name = useSelector(selectName)
	const surname = useSelector(selectSurname)
	const history = useSelector(selectHistory)
	const banks = useSelector(selectBanks)
	const dispatch = useDispatch()
	const todayDate = new Date(); 
	const formatDate = todayDate.getDate() < 10 ? `0${todayDate.getDate()}`:todayDate.getDate();
	const formatMonth = todayDate.getMonth() < 10 ? `0${todayDate.getMonth()}`: todayDate.getMonth();
	const formattedDate = [todayDate.getFullYear(), formatMonth, formatDate].join('-');	
	// -------------------
	const [incomeValue, setIncomeValue] = useState("")
	const [incomeDate, setIncomeDate] = useState(formattedDate)
	const [incomeType, setIncomeType] = useState(incomeTypes[0])
	const [incomeBank, setIncomeBank]= useState(banks[0].name)
	// -------------------
	const [expenditureValue, setExpenditureValue] = useState("")
	const [expenditureDate, setExpenditureDate] = useState(formattedDate)
	const [expenditureType, setExpenditureType] = useState(expenditureTypes[0])
	const [expenditureBank, setExpenditureBank]= useState(banks[0].name)
	// -------------------
	const [baseAmount, setBaseAmount] = useState("")
	const [accountPercent, setAccountPercent] = useState("")
	const [accountOpenDate, setAccountOpenDate] = useState(formattedDate)
	const [accountBank, setAccountBank] = useState("")

	const addIncome = () => {
		if (incomeValue !== 0 && incomeValue !== ""){
			const newData = {
				id: history[0] === undefined ? 1 : history[0].id + 1,
				price: Number(incomeValue),
				isIncome: true,
				info: incomeType,
				date: new Date(incomeDate),
				bank: incomeBank
			}
			dispatch(addIncomePayment(newData))
			setIncomeValue(0)
		}
	}

	const addExpenditure = () => {
		if (expenditureValue !== 0 && expenditureValue !== ""){
			const newData = {
				id: history[0].id + 1 === undefined ? history[0].id + 1 : 1,
				price: Number(expenditureValue),
				isIncome: false,
				info: expenditureType,
				date: new Date(expenditureDate),
				bank: expenditureBank
			}
			dispatch(addExpenditurePayment(newData))
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
		dispatch(AddAccountPayment(newData))
		setBaseAmount(0)
		setAccountPercent(0)
	}

	const getFields = (array, field) => {
		let output = []
		for (var i=0; i < array.length ; ++i)
			output.push(array[i][field])
		return output
	}

	return (
		<div>
			<div className="management-container-group">
				<Container id="container-1" title={`${surname} ${name}`}>
				</Container>
				<Container id="container-2" title="Добавить доход">
					<Input text="Сумма" type="number" value={incomeValue} onChange={setIncomeValue} />
					<InputDate  value={incomeDate} onChange={setIncomeDate}/>
					<Select onChange={setIncomeType} text="Банк" options={incomeTypes}/>
					<Select onChange={setIncomeBank} text="Банк" options={getFields(banks, "name")}/>
					<Button text="Добавить" onClick={() => addIncome()}/>
				</Container>
				<Container id="container-3" title="Добавить расход">
					<Input text="Сумма" type="number" value={expenditureValue} onChange={setExpenditureValue}/>
					<InputDate value={expenditureDate} onChange={setExpenditureDate}/>
					<Select onChange={setExpenditureType} text="Банк" options={expenditureTypes}/>
					<Select onChange={setExpenditureBank} text="Банк" options={getFields(banks, "name")}/>
					<Button text="Добавить" onClick={() => addExpenditure()}/>
				</Container>
				<Container id="container-4" title="Открыть счёт">
					<Input text="Сумма" type="number" value={baseAmount} onChange={setBaseAmount}/>
					<Input text="Процент" type="number" value={accountPercent} onChange={setAccountPercent}/>
					<InputDate value={accountOpenDate} onChange={setAccountOpenDate}/>
					<Select onChange={setAccountBank} text="Банк" options={getFields(banks, "name")}/>
					<Button text="Открыть" onClick={() => addAccount()}/>
				</Container>
			</div>
		</div>
	)
}
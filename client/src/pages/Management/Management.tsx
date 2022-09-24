import './management.scss'
import React, {FunctionComponent as FC, useState} from 'react'
import { expenditureTypes, incomeTypes } from 'types/typesOfPayments'
import {Container} from '../../components/Containers/container'
import {Button} from '../../components/ui/Buttons/button'
import { InputDate } from '../../components/ui/Input/inputDate'
import {Input} from '../../components/ui/Input/input'
import {Select} from '../../components/ui/Select/select'
import {NotificationSuccess, NotificationError} from '../../components/ui/Notification/notification'
import {useDispatch, useSelector} from 'react-redux'
import {selectName, selectSurname} from 'store/slices/userSlice'
import { AddAccountPayment, addExpenditurePayment, addIncomePayment, selectBanks, selectHistory } from 'store/slices/paymentSlice'

export const Management:FC = () => {
	const name = useSelector(selectName)
	const surname = useSelector(selectSurname)
	const history = useSelector(selectHistory)
	const banks = useSelector(selectBanks)
	const dispatch = useDispatch()
	const todayDate = new Date(); 
	const formatDate = todayDate.getDate() < 10 ? `0${todayDate.getDate()}`:todayDate.getDate();
	const formatMonth = todayDate.getMonth() < 10 ? `0${todayDate.getMonth() + 1}`: todayDate.getMonth() + 1;
	const formattedDate = [todayDate.getFullYear(), formatMonth, formatDate].join('-');	
	// -------------------
	const [incomeValue, setIncomeValue] = useState(0)
	const [incomeDate, setIncomeDate] = useState(formattedDate)
	const [incomeType, setIncomeType] = useState(incomeTypes[0])
	const [incomeBank, setIncomeBank]= useState(banks[0].name)
	const [errorMsgAddIncome, setErrorMsgAddIncome] = useState(null)
	const [successMsgAddIncome, setSuccessMsgAddIncome] = useState(null)
	// -------------------
	const [expenditureValue, setExpenditureValue] = useState(0)
	const [expenditureDate, setExpenditureDate] = useState(formattedDate)
	const [expenditureType, setExpenditureType] = useState(expenditureTypes[0])
	const [expenditureBank, setExpenditureBank]= useState(banks[0].name)
	// -------------------
	const [baseAmount, setBaseAmount] = useState(0)
	const [accountPercent, setAccountPercent] = useState(0)
	const [accountOpenDate, setAccountOpenDate] = useState(formattedDate)
	const [accountBank, setAccountBank] = useState("")

	const addIncome = () => {
		if (incomeValue !== 0){
			const newData = {
				id: history[0] === undefined ? 1 : history[0].id + 1,
				price: Number(incomeValue),
				isIncome: true,
				info: incomeType,
				date: new Date(incomeDate),
				bank: incomeBank
			}
			dispatch(addIncomePayment(newData))
			setErrorMsgAddIncome(false)
			setSuccessMsgAddIncome("Доход успешно добавлен")
			setIncomeValue(0)
		}else{
			setErrorMsgAddIncome("Вы не заполнили все поля")
		}
	}

	const addExpenditure = () => {
		if (expenditureValue !== 0){
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

	const getFields = (array:Array<any>, field:string) => {
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
					{errorMsgAddIncome ? <NotificationError text={errorMsgAddIncome}/> : <></> }
					{successMsgAddIncome ? <NotificationSuccess text={successMsgAddIncome}/> : <></>}
					<Input text="Сумма" type="number" value={incomeValue} onChange={setIncomeValue} />
					<InputDate text={incomeDate} value={incomeDate} onChange={setIncomeDate}/>
					<Select onChange={setIncomeType} options={incomeTypes}/>
					<Select onChange={setIncomeBank} options={getFields(banks, "name")}/>
					<Button text="Добавить" onClick={() => addIncome()}/>
				</Container>
				<Container id="container-3" title="Добавить расход">
					<Input text="Сумма" type="number" value={expenditureValue} onChange={setExpenditureValue}/>
					<InputDate text={incomeDate} value={expenditureDate} onChange={setExpenditureDate}/>
					<Select onChange={setExpenditureType} options={expenditureTypes}/>
					<Select onChange={setExpenditureBank}options={getFields(banks, "name")}/>
					<Button text="Добавить" onClick={() => addExpenditure()}/>
				</Container>
				<Container id="container-4" title="Открыть счёт">
					<Input text="Сумма" type="number" value={baseAmount} onChange={setBaseAmount}/>
					<Input text="Процент" type="number" value={accountPercent} onChange={setAccountPercent}/>
					<InputDate text={incomeDate} value={accountOpenDate} onChange={setAccountOpenDate}/>
					<Select onChange={setAccountBank} options={getFields(banks, "name")}/>
					<Button text="Открыть" onClick={() => addAccount()}/>
				</Container>
			</div>
		</div>
	)
}
import React, {FunctionComponent as FC, useState} from 'react'
import {InputCurrency, InputDate } from '../Input/input';
import { Select } from '../Select/select';
import { Button } from '../Buttons/button';
import { NotificationSuccess,  NotificationError} from '../Notification/notification';
import {addExpenditurePayment, selectBanks, selectHistory } from 'store/slices/paymentSlice'
import {useDispatch, useSelector} from 'react-redux'
import {expenditureTypes} from 'types/typesOfPayments'
import { formatDate } from 'utils/helpers/formatDate';
import { getFields } from 'utils/helpers/getData';

export const ExpenseForm:FC = () => {
	const history = useSelector(selectHistory)
	const dispatch = useDispatch()
	const todayDate = formatDate(new Date())
	const banks = useSelector(selectBanks)
	const [expenditureValue, setExpenditureValue] = useState<number>(0)
	const [expenditureDate, setExpenditureDate] = useState<string>(todayDate)
	const [expenditureType, setExpenditureType] = useState<string>(expenditureTypes[0])
	const [expenditureBank, setExpenditureBank]= useState<string>("")
	const [errorMsgAddExpenses, setErrorMsgAddExpenses] = useState<string | null>(null)
	const [successMsgAddExpenses, setSuccessMsgAddExpenses] = useState<string | null>(null)

	const addExpenditure = () => {
		if (expenditureValue !== 0){
			const newData = {
				id: history[0] === undefined ? 1 : history[0].id + 1,
				price: expenditureValue,
				isIncome: false,
				info: expenditureType,
				date: new Date(expenditureDate),
				bank: expenditureBank
			}
			dispatch(addExpenditurePayment(newData))
			setErrorMsgAddExpenses(null)
			setSuccessMsgAddExpenses("Расход успешно добавлен")
			setExpenditureValue(0)
		}else{
			setErrorMsgAddExpenses("Вы не заполнили все поля")
		}
	}

	return (
	<>
		{errorMsgAddExpenses ? <NotificationError text={errorMsgAddExpenses}/> : <></> }
		{successMsgAddExpenses ? <NotificationSuccess text={successMsgAddExpenses}/> : <></>}
		<InputCurrency prefix="₽" onChange={setExpenditureValue}/>
		<InputDate value={expenditureDate} onChange={setExpenditureDate}/>
		<Select onChange={setExpenditureType} options={expenditureTypes}/>
		<Select onChange={setExpenditureBank}options={getFields(banks, 'name')}/>
		<Button text="Добавить" onClick={() => addExpenditure()}/>
	</>
  )
}
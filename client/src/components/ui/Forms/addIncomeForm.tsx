import React, {FunctionComponent as FC, useState} from 'react';
import {InputCurrency, InputDate } from '../Input/input';
import { Select } from '../Select/select';
import { Button } from '../Buttons/button';
import { NotificationSuccess,  NotificationError} from '../Notification/notification';
import {addIncomePayment, selectBanks, selectHistory } from 'store/slices/paymentSlice'
import {useDispatch, useSelector} from 'react-redux'
import {incomeTypes} from 'types/typesOfPayments'
import { getFields } from 'utils/helpers/getData';
import { formatDate } from 'utils/helpers/formatDate';

export const IncomeForm:FC = ()  => {
	const history = useSelector(selectHistory)
	const banks = useSelector(selectBanks)
	const dispatch = useDispatch()
	const todayDate = formatDate(new Date())
	const [incomeValue, setIncomeValue] = useState(0)
	const [incomeDate, setIncomeDate] = useState<string>(todayDate)
	const [incomeType, setIncomeType] = useState<string>(incomeTypes[0])
	const [incomeBank, setIncomeBank]= useState<string>('')
	const [errorMsgAddIncome, setErrorMsgAddIncome] = useState<string | null>(null)
	const [successMsgAddIncome, setSuccessMsgAddIncome] = useState<string | null>(null)

	const addIncome = () => {
		if (incomeValue !== 0){
			const newData = {
				id: history[0] === undefined ? 1 : history[0].id + 1,
				price: incomeValue,
				isIncome: true,
				info: incomeType,
				date: new Date(incomeDate),
				bank: incomeBank
			}
			dispatch(addIncomePayment(newData))
			setErrorMsgAddIncome(null)
			setSuccessMsgAddIncome("Доход успешно добавлен")
			setIncomeValue(0)
		}else{
			setErrorMsgAddIncome("Вы не заполнили все поля")
		}
	}

	return (
	<>
		{errorMsgAddIncome ? <NotificationError text={errorMsgAddIncome}/> : <></> }
		{successMsgAddIncome ? <NotificationSuccess text={successMsgAddIncome}/> : <></>}
		<InputCurrency prefix="₽" onChange={setIncomeValue}/>
		<InputDate value={incomeDate} onChange={setIncomeDate}/>
		<Select onChange={setIncomeType} options={incomeTypes}/>
		<Select onChange={setIncomeBank} options={getFields(banks, "name")}/>
		<Button text="Добавить" onClick={() => addIncome()}/>
	</>
  );
}

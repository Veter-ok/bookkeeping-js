import React, {FunctionComponent as FC, useState} from 'react';
import { Input, InputDate } from '../Input/input';
import { Select } from '../Select/select';
import { Button } from '../Buttons/button';
import { NotificationSuccess,  NotificationError} from '../Notification/notification';
import {addIncomePayment, selectBanks, selectHistory } from 'store/slices/paymentSlice'
import {useDispatch, useSelector} from 'react-redux'
import {incomeTypes} from 'types/typesOfPayments'
import { getFields } from 'utils/getFields';

export const IncomeForm:FC = ()  => {
	const history = useSelector(selectHistory)
	const banks = useSelector(selectBanks)
	const dispatch = useDispatch()
	const todayDate = new Date(); 
	const formatDate = todayDate.getDate() < 10 ? `0${todayDate.getDate()}`:todayDate.getDate();
	const formatMonth = todayDate.getMonth() < 10 ? `0${todayDate.getMonth() + 1}`: todayDate.getMonth() + 1;
	const formattedDate = [todayDate.getFullYear(), formatMonth, formatDate].join('-');
	//const [income, setIncome] = useState<Payment>({id: 0, price: 0, isIncome: true, info: '', date: new Date(formattedDate), bank: ''})	
	const [incomeValue, setIncomeValue] = useState<number>(0)
	const [incomeDate, setIncomeDate] = useState<string>(formattedDate)
	const [incomeType, setIncomeType] = useState<string>(incomeTypes[0])
	const [incomeBank, setIncomeBank]= useState<string>(banks[0].name)
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
		<Input text="Сумма" type="number" value={incomeValue} onChange={setIncomeValue} />
		<InputDate value={incomeDate} onChange={setIncomeDate}/>
		<Select onChange={setIncomeType} options={incomeTypes}/>
		<Select onChange={setIncomeBank} options={getFields(banks, "name")}/>
		<Button text="Добавить" onClick={() => addIncome()}/>
	</>
  );
}

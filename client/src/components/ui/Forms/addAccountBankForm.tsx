import React, {FunctionComponent as FC, useState} from 'react'
import { Input, InputDate } from '../Input/input';
import { Select } from '../Select/select';
import { Button } from '../Buttons/button';
import { NotificationSuccess,  NotificationError} from '../Notification/notification';
import { AddAccountPayment, selectBanks} from 'store/slices/paymentSlice'
import {useDispatch, useSelector} from 'react-redux'
import { getFields } from 'utils/getFields';

export const AccountBankForm:FC = () => {
	const banks = useSelector(selectBanks)
	const dispatch = useDispatch()
	const todayDate = new Date(); 
	const formatDate = todayDate.getDate() < 10 ? `0${todayDate.getDate()}`:todayDate.getDate();
	const formatMonth = todayDate.getMonth() < 10 ? `0${todayDate.getMonth() + 1}`: todayDate.getMonth() + 1;
	const formattedDate = [todayDate.getFullYear(), formatMonth, formatDate].join('-');
	//
	const [baseAmount, setBaseAmount] = useState<number>(0)
	const [accountPercent, setAccountPercent] = useState<number>(0)
	const [accountOpenDate, setAccountOpenDate] = useState<string>(formattedDate)
	const [accountBank, setAccountBank] = useState<string>("")
	const [errorMsgAddAccount, setErrorMsgAddAccount] = useState<string | null>(null)
	const [successMsgAddAccount, setSuccessMsgAddAccount] = useState<string | null>(null)

	const addAccount = () => {
		if (baseAmount !== 0 && accountPercent !== 0) {
			const newData = {
				amount: baseAmount,
				percent: accountPercent,
				dateOpen: new Date(accountOpenDate),
				bank: accountBank
			}
			dispatch(AddAccountPayment(newData))
			setErrorMsgAddAccount(null)
			setSuccessMsgAddAccount("Счёт успешно добавлен")
			setBaseAmount(0)
			setAccountPercent(0)
		}else{
			setErrorMsgAddAccount("Вы не заполнили все поля")
		}
	}

	return (
	<>
		{errorMsgAddAccount ? <NotificationError text={errorMsgAddAccount}/> : <></> }
		{successMsgAddAccount ? <NotificationSuccess text={successMsgAddAccount}/> : <></>}
		<Input text="Сумма" type="number" value={baseAmount} onChange={setBaseAmount}/>
		<Input text="Процент" type="number" value={accountPercent} onChange={setAccountPercent}/>
		<InputDate value={accountOpenDate} onChange={setAccountOpenDate}/>
		<Select onChange={setAccountBank} options={getFields(banks, "name")}/>
		<Button text="Открыть" onClick={() => addAccount()}/>
	</>
	)
}
import React, {FunctionComponent as FC, useState} from 'react'
import {InputCurrency, InputDate } from '../Input/input';
import { Select } from '../Select/select';
import { Button } from '../Buttons/button';
import { NotificationSuccess,  NotificationError} from '../Notification/notification';
import { AddAccountPayment, selectBanks} from 'store/slices/paymentSlice'
import {useDispatch, useSelector} from 'react-redux'
import { getFields } from 'utils/getFields';
import { formatDate } from 'utils/formatDate';

export const AccountBankForm:FC = () => {
	const banks = useSelector(selectBanks)
	const dispatch = useDispatch()
	const accountTypes = ["Счёт", "Вклад"]
	const todayDate = formatDate(new Date())
	const [baseAmount, setBaseAmount] = useState<number>(0)
	const [percent, setPercent] = useState<number>(0)
	const [openDate, setOpenDate] = useState<string>(todayDate)
	const [type, setType] = useState<string>(accountTypes[0])
	const [accountBank, setAccountBank] = useState<string>("")
	const [errorMsgAddAccount, setErrorMsgAddAccount] = useState<string | null>(null)
	const [successMsgAddAccount, setSuccessMsgAddAccount] = useState<string | null>(null)

	const addAccount = () => {
		if (baseAmount !== 0 && percent !== 0) {
			console.log(baseAmount)
			const newData = {
				amount: Number(baseAmount),
				type: type,
				percent: percent,
				dateOpen: new Date(openDate),
				bank: accountBank
			}
			dispatch(AddAccountPayment(newData))
			setErrorMsgAddAccount(null)
			setSuccessMsgAddAccount("Счёт успешно добавлен")
			setBaseAmount(0)
			setPercent(0)
		}else{
			setErrorMsgAddAccount("Вы не заполнили все поля")
		}
	}

	return (
	<>
		{errorMsgAddAccount ? <NotificationError text={errorMsgAddAccount}/> : <></> }
		{successMsgAddAccount ? <NotificationSuccess text={successMsgAddAccount}/> : <></>}
		<InputCurrency prefix="₽" onChange={setBaseAmount}/>
		<Select onChange={setAccountBank} options={getFields(banks, "name")}/>
		<Select options={accountTypes} onChange={setType}></Select>
		<InputCurrency prefix="%" onChange={setPercent}/>
		<InputDate value={openDate} onChange={setOpenDate}/>
		<Button text="Открыть" onClick={() => addAccount()}/>
	</>
	)
}
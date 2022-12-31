import React, {FunctionComponent as FC, useEffect, useState} from 'react'
import {InputCurrency, InputDate } from '../Input/input';
import { Select } from '../Select/select';
import { Button } from '../Buttons/button';
import { NotificationSuccess,  NotificationError} from '../Notification/notification';
import { Slider } from '../Slider/Slider';
import { AddAccountPayment, selectBanks} from 'store/slices/paymentSlice'
import {useDispatch} from 'react-redux'
import { formatDate } from 'utils/helpers/formatDate';
import BankAccountBlock from '../Blocks/BankAccountBlock/BankAccountBlock';
import axios from 'axios';
import { ACCOUNTS } from 'utils/constants/routerLinks';
import { useSelector } from 'react-redux';
import { getFields } from 'utils/helpers/getData';
import { BanksAccount } from 'types/banksTypes';

export const AccountBankForm:FC = () => {
	const dispatch = useDispatch()
	const todayDate = formatDate(new Date())
	const banks = useSelector(selectBanks)
	const [accounts, setAccounts] = useState<Array<BanksAccount>>([])
	const [currentlyAccountID, setCurrentlyAccountID] = useState<number>(0)
	const [baseAmount, setBaseAmount] = useState<number>(0)
	const [openDate, setOpenDate] = useState<string>(todayDate)
	const [accountBank, setAccountBank] = useState<string>("")
	const [errorMsgAddAccount, setErrorMsgAddAccount] = useState<string>("")
	const [successMsgAddAccount, setSuccessMsgAddAccount] = useState<string>("")

	useEffect(() => {
		axios.get(`http://localhost:5000/api/v1/${ACCOUNTS}`).then(resp => {
			setAccounts(resp.data)
		}).catch((err) => console.log(err))
	}, [])

	const addAccount = () => {
		if (baseAmount !== 0) {
			const newData = {
				id: 1,
				idAaccount: currentlyAccounts[currentlyAccountID].id,
				amount: Number(baseAmount),
				dateOpen: new Date(openDate),
				allAccounts: accounts,
			}
			dispatch(AddAccountPayment(newData))
			setErrorMsgAddAccount("")
			setSuccessMsgAddAccount("Счёт/Вклад успешно добавлен")
			setBaseAmount(0)
		}else{
			setErrorMsgAddAccount("Вы не заполнили все поля")
		}
	}

	const currentlyAccounts = accounts.filter((account) => {
		if (account.bank === accountBank){
			return true
		}
		return false
	})

	return (
	<>
		{errorMsgAddAccount ? <NotificationError text={errorMsgAddAccount}/> : <></> }
		{successMsgAddAccount ? <NotificationSuccess text={successMsgAddAccount}/> : <></>}
		<InputCurrency prefix="₽" onChange={setBaseAmount}/>
		<InputDate value={openDate} onChange={setOpenDate}/>
		<Select onChange={setAccountBank} options={getFields(banks, 'name')}/>
		{currentlyAccounts.length !== 0 ?
			<Slider length={340} elementsLength={200} onChange={setCurrentlyAccountID}>
				{currentlyAccounts.map((account: BanksAccount) => 
					<BankAccountBlock key={account.id} account={account}/>
				)}
			</Slider>
			:
			<div className="container__content__placeholder">Предложений от этого банка пока нет</div>
		}
		<Button text="Открыть" onClick={() => addAccount()}/>
	</>
	)
}
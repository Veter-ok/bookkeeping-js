import React, {FunctionComponent as FC, useState} from 'react'
import {InputCurrency, InputDate } from '../Input/input';
import { Select } from '../Select/select';
import { Button } from '../Buttons/button';
import { NotificationSuccess,  NotificationError} from '../Notification/notification';
import { Slider } from '../Slider/Slider';
import { ACCOUNTS, BanksAccount } from 'utils/accounts';
import { AddAccountPayment, selectBanks} from 'store/slices/paymentSlice'
import {useDispatch, useSelector} from 'react-redux'
import { getFields } from 'utils/getData';
import { formatDate } from 'utils/formatDate';
import BankAccountBlock from '../Blocks/BankAccountBlock/BankAccountBlock';
import { Account } from 'types/userType';

export const AccountBankForm:FC = () => {
	const banks = useSelector(selectBanks)
	const dispatch = useDispatch()
	const todayDate = formatDate(new Date())
	const [currentlyAccountID, setCurrentlyAccountID] = useState<number | null>(0)
	const [baseAmount, setBaseAmount] = useState<number>(0)
	const [openDate, setOpenDate] = useState<string>(todayDate)
	const [accountBank, setAccountBank] = useState<string>("")
	const [errorMsgAddAccount, setErrorMsgAddAccount] = useState<string | null>(null)
	const [successMsgAddAccount, setSuccessMsgAddAccount] = useState<string | null>(null)

	const addAccount = () => {
		if (baseAmount !== 0) {
			const newData:Account = {
				id: 1,
				idAaccount: currentlyAccounts[currentlyAccountID].id,
				amount: Number(baseAmount),
				dateOpen: new Date(openDate),
			}
			dispatch(AddAccountPayment(newData))
			setErrorMsgAddAccount(null)
			setSuccessMsgAddAccount("Счёт/Вклад успешно добавлен")
			setBaseAmount(0)
		}else{
			setErrorMsgAddAccount("Вы не заполнили все поля")
		}
	}

	const currentlyAccounts = ACCOUNTS.filter((account) => {
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
		<Select onChange={setAccountBank} options={getFields(banks, "name")}/>
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
import React, {FunctionComponent as FC, FormEvent, useEffect, useState} from "react";
import { Container } from "components/Containers/container";
import { ButtonSubmit } from "components/ui/Buttons/button";
import { Input} from "components/ui/Input/input";
import { Select } from "components/ui/Select/select";
import { getBankIdByName, getFields } from "utils/helpers/getData";
import axios from "axios";
import AccountAdminBlock from "components/ui/Blocks/Admin/AccountAdminBlock/accountBlock";

const AccountAdminWindow:FC = () => {
	const accountsTypes = ["Счёт", "Вклад"]

	const [banks, setBanks] = useState([])
	const [accounts, setAccounts] = useState([])
	const [accountName, setAccountName] = useState("")
	const [bankName, setBankName] = useState("")
	const [percent, setPercent] = useState()
	const [term, setTerm] = useState()
	const [type, setType] = useState<string>(accountsTypes[0])
	const [description, setDescription] = useState()

	useEffect(() => {
		axios.get(`http://localhost:5000/api/v1/accounts`).then(resp => {
			if (resp.data !== ''){
				setAccounts(resp.data)
			}
		}).catch((err) => console.log(err))
		axios.get(`http://localhost:5000/api/v1/banks`).then(resp => { 
			setBanks(resp.data)
			setBankName(resp.data[0].name)
		})
	}, [])

	const addAccount = (event: FormEvent) => {
		event.preventDefault();
		if (type === "Счёт"){
			const account = {
				bank_id: getBankIdByName(banks, bankName),
				title: accountName,
				percent: Number(percent),
				description: description,
			}
			console.log(banks, bankName, getBankIdByName(banks, bankName))
			axios.post(`http://localhost:5000/api/v1/admin/add_account`, {
				admin_token: '123',
				accountData: account
			}).then(resp => {
				console.log(resp)
			})
		}else{
			const deposit = {
				bank_id: getBankIdByName(banks, bankName),
				title: accountName,
				term: term,
				percent: Number(percent),
				description: description,
			}
			console.log(deposit)
		}
	}

	return (
		<>
			<Container id="container-1" title="Добавить счёт">
				<form onSubmit={addAccount}>
					<Input placeholder="Имя" type="text" value={accountName} onChange={setAccountName}/>
					<Select onChange={setBankName} options={getFields(banks, "name")}/>
					<Input placeholder="Процент по счёту" type="number" value={percent} onChange={setPercent}/>
					<Select options={accountsTypes} onChange={setType}/>
					{type === "Вклад" ?
					<Input placeholder="Сколько месяцев" type="number" value={term} onChange={setTerm}/>
					:
					<></>
					}
					<Input placeholder={`Опишите ${type.toLowerCase()}`} type="text" value={description} onChange={setDescription}/>
					<ButtonSubmit text="Добавить"/>
				</form>
			</Container>
			<Container id="container-2" title="Счета и вклады">
			{accounts.map((account) => 
				<AccountAdminBlock account={account}/>
			)}
			</Container>
		</>
	)
}

export default AccountAdminWindow
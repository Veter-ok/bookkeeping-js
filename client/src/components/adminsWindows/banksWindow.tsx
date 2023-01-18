import axios from "axios";
import { Container } from "components/Containers/container";
import BankBlock from "components/ui/Blocks/BankAdminBlock/bankBlock";
import { ButtonSubmit } from "components/ui/Buttons/button";
import { Input } from "components/ui/Input/input";
import React, {FunctionComponent as FC, FormEvent, useEffect, useState} from "react";
import { Bank } from "types/banksTypes";

const BanksAdminWindow:FC = () => {
	const [banks, setBanks] = useState<Bank[]>([])
	const [bankName, setBankName] = useState<string>('')

	useEffect(() => {
		getBanks()
	}, [])

	const getBanks = () => {
		axios.get(`http://localhost:5000/api/v1/banks`).then((resp) => {
			setBanks(resp.data)
		}).catch((err) => {console.log(err)})
	}

	const addBank = (event: FormEvent) => {
		event.preventDefault()
		axios.post(`http://localhost:5000/api/v1/admin/add_bank`, {admin_token: 1, name: bankName}).then((resp) => {
			getBanks()
		}).catch((err) => {console.log(err)})
	}

	const deleteBank = (bank_id: number) => {
		axios.delete(`http://localhost:5000/api/v1/admin/delete_bank/${1}/${bank_id}`).then((resp) => {
			getBanks()
		}).catch((err) => {console.log(err)})
	}

	return (
		<div className="banks-admin-panel-container-group">
			<Container id="container-1" title="Добавить банк">
				<form onSubmit={addBank}>
					<Input placeholder="Имя" type="text" value={bankName} onChange={setBankName}/>
					<ButtonSubmit text="Добавить"/>
				</form>
			</Container>
			<Container id="container-2" title="Банки">
				{banks.map((bank) => 
					<BankBlock bank={bank} del={deleteBank}/>
				)}
			</Container>
		</div>
	)
}

export default BanksAdminWindow
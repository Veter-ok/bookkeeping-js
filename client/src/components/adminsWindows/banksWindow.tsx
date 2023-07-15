import axios from "axios";
import { Container } from "components/Containers/container";
import BankBlock from "components/ui/Blocks/Admin/BankAdminBlock/bankBlock";
import { ButtonSubmit } from "components/ui/Buttons/button";
import { Input } from "components/ui/Input/input";
import React, {FunctionComponent as FC, FormEvent, useEffect, useState} from "react";
import { Bank } from "types/mainTypes";
import { ADMIN_HEADER, DEFAULT_URL } from "utils/constants/routerLinks";

const BanksAdminWindow:FC = () => {
	const [banks, setBanks] = useState<Bank[]>([])
	const [bankName, setBankName] = useState('')

	useEffect(() => {
		getBanks()
	}, [])

	const getBanks = () => {
		axios.get(`${DEFAULT_URL}/banks`).then((resp) => {
			setBanks(resp.data)
		}).catch((err) => {console.log(err)})
	}

	const addBank = (event: FormEvent) => {
		event.preventDefault()
		axios.post(`${DEFAULT_URL}/admin/add_bank`, {name: bankName}, ADMIN_HEADER).then((resp) => {
			if (resp.status === 200){
				getBanks()
			}
		}).catch((err) => {console.log(err)})
	}

	const deleteBank = (bank_id: number) => {
		axios.delete(`${DEFAULT_URL}/admin/delete_bank/${bank_id}`, ADMIN_HEADER).then((resp) => {
			if (resp.status === 200){
				getBanks()
			}
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
					<BankBlock key={bank.id} bank={bank} del={deleteBank}/>
				)}
			</Container>
		</div>
	)
}

export default BanksAdminWindow
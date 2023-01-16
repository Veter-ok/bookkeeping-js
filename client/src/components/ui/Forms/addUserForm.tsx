import React, {FunctionComponent as FC, FormEvent, useState} from "react";
import { Input, InputDate } from "../Input/input";
import { Select } from "../Select/select";
import { ButtonSubmit } from "../Buttons/button";
import axios from "axios";

interface IAddUserForm {
	onAddUser?: Function
}

const AddUserForm:FC<IAddUserForm> = ({onAddUser}) => {
	const roles = ['user', 'admin']
	const [name, setName] = useState<string>('')
	const [surname, setSurname] = useState<string>('')
	const [role, setRole] = useState<string>(roles[0])
	const [email, setEmail] = useState<string>('')
	const [password, setPassword] = useState<string>('')
	const [date, setDate] = useState<string>('')

	const addUser = (event: FormEvent) => {
		event.preventDefault()
		axios.post('http://localhost:5000/api/v1/admin/add_user', {
			admin_token: 123,
			name: name,
			surname: surname,
			role: role,
			email: email,
			password: password,
			birthday: date,
		}).then((resp) => {
			console.log(resp.data)
			if (onAddUser) {
				onAddUser()
			}
		})
	}

	return (
		<form onSubmit={addUser}>
			<Input placeholder="Имя" type="text" value={name} onChange={setName}/>
			<Input placeholder="Фамилия" type="text" value={surname} onChange={setSurname}/>
			<Select options={roles} onChange={setRole}/>
			<Input placeholder="Email: example@gmail.com" type="text" value={email} onChange={setEmail}/>
			<Input placeholder="Пароль" type="text" value={password} onChange={setPassword}/>
			<InputDate value={date} onChange={setDate}/>
			<ButtonSubmit text="Добавить"/>
		</form>	
	)
}

export default AddUserForm
import './AdminPanel.scss'
import { Container } from "components/Containers/container"
import { ButtonSubmit } from "components/ui/Buttons/button"
import { Input, InputDate } from "components/ui/Input/input"
import { Select } from "components/ui/Select/select"
import React, {FunctionComponent as FC, useState} from "react"

const AdminPanel:FC = () => {
	const [name, setName] = useState<string>('')
	const [surname, setSurname] = useState<string>('')
	const [role, setRole] = useState<string>('')
	const [email, setEmail] = useState<string>('')
	const [password, setPassword] = useState<string>('')
	const [date, setDate] = useState<string>('')

	const roles = ['user', 'admin']

	return (
		<div className="admin_panel-container-group">
			<Container id="container-1" title="Добавить пользователя">
				<form>
					<Input placeholder="Имя" type="text" value={name} onChange={setName}/>
					<Input placeholder="Фамилия" type="text" value={surname} onChange={setSurname}/>
					<Select options={roles} onChange={setRole}/>
					<Input placeholder="Email: example@gmail.com" type="text" value={email} onChange={setEmail}/>
					<Input placeholder="Пароль" type="text" value={password} onChange={setPassword}/>
					<InputDate value={date} onChange={setDate}/>
					<ButtonSubmit text="Добавить"/>
				</form>
			</Container>

		</div>
	)
}

export default AdminPanel
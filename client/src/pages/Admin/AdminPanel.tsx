import axios from 'axios'
import './AdminPanel.scss'
import { Container } from "components/Containers/container"
import { ButtonSubmit } from "components/ui/Buttons/button"
import { Input, InputDate } from "components/ui/Input/input"
import { Select } from "components/ui/Select/select"
import React, {FunctionComponent as FC, FormEvent, useEffect, useState} from "react"
import { User } from 'types/userType'
import { useSelector } from 'react-redux'
import { UserBlock } from 'components/ui/Blocks/UserBlock/userBlock'

const AdminPanel:FC = () => {
	//const id = useSelector()
	const [users, setUsers] = useState<any[]>([])
	const [name, setName] = useState<string>('')
	const [surname, setSurname] = useState<string>('')
	const [role, setRole] = useState<string>('')
	const [email, setEmail] = useState<string>('')
	const [password, setPassword] = useState<string>('')
	const [date, setDate] = useState<string>('')

	useEffect(() => {
		axios.get(`http://localhost:5000/api/v1//admin/${1}/user`).then((resp) => {
			setUsers(resp.data)
		}).catch((err) => {
			console.log(err)
		})
	}) 

	const addUser = (event: FormEvent) => {
		const newUser = {
			name: name,
			surname: name,
			role: role,
			email: email,
			password: password,
			birthday: date,
		}
		axios.post('http://localhost:5000/api/v1/admin/add_user', {newUser: newUser, admin_id: 123}).then((resp) => {
			
		})
	}

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
			<Container id="container-2" title="Пользователи">
				{users.map((user) => 
					<UserBlock user={user}/>
				)}
			</Container>
		</div>
	)
}

export default AdminPanel
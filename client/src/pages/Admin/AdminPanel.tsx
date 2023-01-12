import axios from 'axios'
import './AdminPanel.scss'
import { Container } from "components/Containers/container"
import { Button, ButtonSubmit } from "components/ui/Buttons/button"
import { Input, InputDate } from "components/ui/Input/input"
import { Select } from "components/ui/Select/select"
import React, {FunctionComponent as FC, FormEvent, useEffect, useState} from "react"
import { UserBlock } from 'components/ui/Blocks/UserBlock/userBlock'

const AdminPanel:FC = () => {
	//const id = useSelector()
	const roles = ['user', 'admin']
	const [users, setUsers] = useState<any[]>([])
	const [name, setName] = useState<string>('')
	const [surname, setSurname] = useState<string>('')
	const [role, setRole] = useState<string>(roles[0])
	const [email, setEmail] = useState<string>('')
	const [password, setPassword] = useState<string>('')
	const [date, setDate] = useState<string>('')

	useEffect(() => {
		getUsers()
	}, []) 

	const getUsers = () => {
		axios.get(`http://localhost:5000/api/v1/admin/${1}/user`).then((resp) => {
			setUsers(resp.data)
		}).catch((err) => {
			console.log(err)
		})
	} 

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
			getUsers()
		})
	}

	const deleteUser = (user_id: number) => {
		console.log(user_id)
		axios.delete(`http://localhost:5000/api/v1/admin/${1}/delete_user/${user_id}`).then((resp) => {
			getUsers()
		}).catch((err) => {
			console.log(err)
		})
	}

	return (
		<>
			<div className="switch-windows">
				<ul className="switch-windows__list-windows">
					<li className="">Пользователи</li>
					<li className="">Банки</li>
					<li className="">Карты</li>
					<li className="">Счета</li>
				</ul>
			</div>
			<div className="admin_panel-container-group">
				<Container id="container-1" title="Добавить пользователя">
					<form onSubmit={addUser}>
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
						<UserBlock key={user.id} user={user} del={deleteUser}/>
					)}
				</Container>
			</div>
		</>
	)
}

export default AdminPanel
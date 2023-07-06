import './login.scss'
import React, {FormEvent, useState, FunctionComponent as FC} from 'react'
import {Container} from 'components/Containers/container'
import {Input} from 'components/ui/Input/input'
import {useDispatch, useSelector} from 'react-redux'
import { login, selectAuth, selectName, selectSurname} from 'store/slices/userSlice'
import axios from 'axios'
import { User } from 'types/userType'
import { ButtonSubmit } from 'components/ui/Buttons/button'

const Login:FC = () => {
	const Auth = useSelector(selectAuth)
	const userName = useSelector(selectName)
	const userSurname = useSelector(selectSurname)
	const dispatch = useDispatch()
	const [name, setName] = useState<string>("")
	const [password, setPassword] = useState<string>("")

	const logIn = (event: FormEvent) => {
		event.preventDefault()
		axios.post('http://localhost:5000/api/v1/auth/login', {
				"name": name,
				"password":	password
			}).then(resp => {
				const newUser:User = resp.data.user
				dispatch(login({
					Auth: true,
					id: newUser.id,
					name: newUser.name,
					role: newUser.role,
					surname: newUser.surname,
					password: newUser.surname,
					birthday: newUser.birthday,
				}))
				localStorage.setItem("token", resp.data.accessToken)
			})
			.catch((err) => {
				console.log(err)
				console.log(err.response.data.msg)
			})
	}

	return (
		<div className="form">
			<form onSubmit={(e) => logIn(e)}>
				<Container title="Вход">
					<p>{Auth ? `${userName} ${userSurname}` : ''}</p>
					<Input placeholder="Имя" type="text" value={name} onChange={setName}/>
					<Input placeholder="Пароль" type="password" value={password} onChange={setPassword}/>
					<ButtonSubmit text="Войти"/>
				</Container>
			</form>
		</div>
	)
}

export default Login
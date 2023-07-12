import './login.scss'
import React, {FormEvent, useState, FunctionComponent as FC} from 'react'
import {Container} from 'components/Containers/container'
import {Input} from 'components/ui/Input/input'
import {useDispatch, useSelector} from 'react-redux'
import { login, selectAuth, selectName, selectSurname} from 'store/slices/userSlice'
import { ButtonSubmit } from 'components/ui/Buttons/button'
import { User } from 'types/userType'
import axios from 'axios'

const Login:FC = () => {
	const Auth = useSelector(selectAuth)
	const userName = useSelector(selectName)
	const userSurname = useSelector(selectSurname)
	const dispatch = useDispatch()
	const [email, setEmail] = useState("")
	const [password, setPassword] = useState("")

	const logIn = (event: FormEvent) => {
		event.preventDefault()
		axios.post('http://localhost:5000/api/v1/auth/login', {
				"email": email,
				"password":	password
			}).then(resp => {
				const newUser:User = resp.data.user
				dispatch(login({
					Auth: true,
					id: newUser.id,
					name: newUser.name,
					isAdmin: newUser.isAdmin,
					surname: newUser.surname,
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
					<Input placeholder="Email" type="text" value={email} onChange={setEmail}/>
					<Input placeholder="Пароль" type="password" value={password} onChange={setPassword}/>
					<ButtonSubmit text="Войти"/>
				</Container>
			</form>
		</div>
	)
}

export default Login
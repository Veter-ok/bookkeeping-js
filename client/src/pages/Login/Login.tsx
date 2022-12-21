import './login.scss'
import React, {FormEvent, useState, FunctionComponent as FC} from 'react'
import {Container} from '../../components/Containers/container'
import {Input} from '../../components/ui/Input/input'
import {useDispatch, useSelector} from 'react-redux'
import { login, selectAuth, selectName, selectSurname} from 'store/slices/userSlice'
import { loginPayment } from 'store/slices/paymentSlice'
import axios from 'axios'
import { User } from 'types/userType'

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
				const newUser:User = resp.data
				dispatch(login({
					Auth: true,
					name: newUser.name,
					surname: newUser.surname,
					birthday: newUser.birthday
				}))
				dispatch(loginPayment({
					banks: newUser.banks,
					accounts: newUser.accounts,
					cards: newUser.cards,
					years: newUser.years,
					history: newUser.history
				}))
			})
			.catch((err) => {
				console.log(err)
			})
	}

	return (
		<div className="form">
			<form onSubmit={(e) => logIn(e)}>
				<Container title="Вход">
					<p>{Auth ? `${userName} ${userSurname}` : ''}</p>
					<Input placeholder="Имя" type="text" value={name} onChange={setName}/>
					<Input placeholder="Пароль" type="password" value={password} onChange={setPassword}/>
					<button type="submit">Войти</button>
				</Container>
			</form>
		</div>
	)
}

export default Login
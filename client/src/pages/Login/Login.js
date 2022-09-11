import './login.scss'
import {User1} from '../../utils/user'
import {Container} from '../../components/Containers/container'
import {Input} from '../../components/ui/Input/input'
//import { Button } from '../../components/ui/Buttons/button'
import {useDispatch, useSelector} from 'react-redux'
import { useState } from 'react'
import { login, selectAuth, selectName, selectSurname} from 'store/slices/userSlice'
import { loginPayment } from 'store/slices/paymentSlice'

export const Login = () => {
	const Auth = useSelector(selectAuth)
	const userName = useSelector(selectName)
	const userSurname = useSelector(selectSurname)
	const dispatch = useDispatch()
	const [name, setName] = useState("")
	const [password, setPassword] = useState("")

	const logIn = (event) => {
		event.preventDefault()
		dispatch(login({
			Auth: true,
			name: User1.name,
			surname: User1.surname,
			birthday: User1.birthday
		}))
		dispatch(loginPayment({
			banks: User1.banks,
			accounts: User1.accounts,
			years: User1.years,
			history: User1.history
		}))
	}

	return (
		<div className="form">
			<form onSubmit={(e) => logIn(e)}>
				<Container title="Вход">
					{Auth ? `${userName} ${userSurname}` : ''}
					<Input text="Имя" type="text" value={name} onChange={setName}/>
					<Input text="Пароль" type="password" value={password} onChange={setPassword}/>
					<button type="submit">Войти</button>
				</Container>
			</form>
		</div>
	)
}
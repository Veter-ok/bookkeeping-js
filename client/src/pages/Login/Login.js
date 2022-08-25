import './login.scss'
import {Container} from '../../components/Containers/container'
import {Input} from '../../components/ui/Input/input'
import { ButtonMain } from '../../components/ui/Buttons/buttonMain'
import { useState } from 'react'

export const Login = () => {
	const [name, setName] = useState("")
	const [password, setPassword] = useState("")

	return (
		<div className="form">
			<form>
				<Container title="Вход">
					<Input text="Имя" type="text" value={name} onChange={setName}/>
					<Input text="Пароль" type="password" value={password} onChange={setPassword}/>
					<ButtonMain text="Войти"/>
				</Container>
			</form>
		</div>
	)
}
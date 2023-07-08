import './registration.scss'
import React, { useState, FunctionComponent as FC, FormEvent} from 'react';
import {Container} from '../../components/Containers/container'
import {Input, InputDate} from '../../components/ui/Input/input'
import axios from 'axios';
import bcrypt from 'bcryptjs'
import { DEFAULT_URL, REGISTRATION } from 'utils/constants/routerLinks';
import { ButtonSubmit } from 'components/ui/Buttons/button';
import { useNavigate } from 'react-router-dom';

const Registration:FC = () => {
	const nav = useNavigate();
	const [name, setName] = useState("")
	const [surname, setSurname] = useState<string>("")
	const [password, setPassword] = useState<string>("")
	const [email, setEmail] = useState<string>("")
	const [birthday, setBirthday] = useState<string>("")

	const singUp = (event: FormEvent) => {
		event.preventDefault()
		const newUser = {
			name: name,
			surname: surname,
			email: email,
			password: bcrypt.hashSync(password, 10),
			birthday: birthday
		}
		axios.post(`${DEFAULT_URL}/${REGISTRATION}`, newUser).then((resp) => {
			if (resp.status === 200){
				nav('/login')
			}
		})
		.catch((err) => console.log(err))
	}

	return (
		<div className="form">
			<form onSubmit={(e) => singUp(e)}>
				<Container title="Регистрация">
					<Input placeholder="Введите своё имя" type="text" value={name} onChange={setName}/>
					<Input placeholder="Введите свою фамилию" type="text" value={surname} onChange={setSurname}/>
					<Input placeholder="Введите свою почту" type="email" value={email} onChange={setEmail}/>
					<Input placeholder="Введите пароль" type="password" value={password} onChange={setPassword}/>
					<InputDate value={birthday} onChange={setBirthday}/>
					<ButtonSubmit text="Создать"/>
				</Container>
			</form>
		</div>
	)
}

export default Registration
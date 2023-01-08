import './registration.scss'
import React, { useState, FunctionComponent as FC, FormEvent} from 'react';
import {Container} from '../../components/Containers/container'
import {Input, InputDate} from '../../components/ui/Input/input'
import { User } from 'types/userType';
import axios from 'axios';
import { REGISTRATION } from 'utils/constants/routerLinks';
import { login } from 'store/slices/userSlice';
import { useDispatch } from 'react-redux';
import { ButtonSubmit } from 'components/ui/Buttons/button';

const Registration:FC = () => {
	const dispatch = useDispatch()
	const [name, setName] = useState("")
	const [surname, setSurname] = useState<string>("")
	const [password, setPassword] = useState<string>("")
	const [birthday, setBirthday] = useState<string>("")

	const singUp = (event: FormEvent) => {
		event.preventDefault()
		const newUser = {
			name: name,
			surname: surname,
			password: password,
			birthday: birthday
		}
		axios.post(`http://localhost:5000/api/v1/${REGISTRATION}`, newUser).then((resp) => {
			console.log(resp.status, resp.data)
			if (resp.status === 200){
				dispatch(login({
					Auth: true,
					id: -1,
					name: newUser.name,
					role: 'user',
					surname: newUser.surname,
					password: newUser.password,
					birthday: newUser.birthday
				}))
			}
		})
		.catch((err) => console.log(err))
	}

	return (
		<div className="form">
			<form onSubmit={(e) => singUp(e)}>
				<Container title="Регистрация">
					{/* {Auth ? `${userName} ${userSurname}` : ''} */}
					<Input placeholder="Введите своё имя" type="text" value={name} onChange={setName}/>
					<Input placeholder="Введите свою фамилию" type="text" value={surname} onChange={setSurname}/>
					<Input placeholder="Введите пароль" type="password" value={password} onChange={setPassword}/>
					<InputDate value={birthday} onChange={setBirthday}/>
					<ButtonSubmit text="Создать"/>
				</Container>
			</form>
		</div>
	)
}

export default Registration
import './registration.scss'
import React, { useState, FunctionComponent as FC, FormEvent} from 'react';
import {Container} from '../../components/Containers/container'
import {Input, InputDate} from '../../components/ui/Input/input'
import { User } from 'types/userType';
import axios from 'axios';
import { REGISTRATION } from 'utils/constants/routerLinks';
import { login } from 'store/slices/userSlice';
import { useDispatch } from 'react-redux';

const Registration:FC = () => {
	const dispatch = useDispatch()
	const [name, setName] = useState("")
	const [surname, setSurname] = useState<string>("")
	const [password, setPassword] = useState<string>("")
	const [birthday, setBirthday] = useState<string>("")

	const singUp = (event: FormEvent) => {
		event.preventDefault()
		const newUser:User = {
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
					name: newUser.name,
					surname: newUser.surname,
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
					<button type="submit">Создать</button>
				</Container>
			</form>
		</div>
	)
}

export default Registration
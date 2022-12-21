import './registration.scss'
import React, { useState, FunctionComponent as FC, FormEvent} from 'react';
import {Container} from '../../components/Containers/container'
import {Input, InputDate} from '../../components/ui/Input/input'
import { User } from 'types/userType';
import axios from 'axios';
import { REGISTRATION } from 'utils/constants/routerLinks';

const Registration:FC = () => {
	const [name, setName] = useState("")
	const [surname, setSurname] = useState<string>("")
	const [password, setPassword] = useState<string>("")
	const [birthday, setBirthday] = useState<string>("")

	const singUp = (event: FormEvent) => {
		event.preventDefault()
		const newUser: User = {
			name: name,
			surname: surname,
			birthday: birthday,
			banks: [],
			cards: [],
			accounts: [],
			years: {"2022": [
					{month: "янв", income: 0, expenditure: 0},
					{month: "фев", income: 0, expenditure: 0},
					{month: "март", income: 0, expenditure: 0},
					{month: "апр", income: 0, expenditure: 0},
					{month: "май", income: 0, expenditure: 0},
					{month: "июнь", income: 0, expenditure: 0},
					{month: "июль", income: 0, expenditure: 0},
					{month: "авг", income: 0, expenditure: 0},
					{month: "сен", income: 0, expenditure: 0},
					{month: "окт", income: 0, expenditure: 0},
					{month: "нояб", income: 0, expenditure: 0},
					{month: "дек", income: 0, expenditure: 0},
				],
			},
			history: []
		}
		axios.post(`http://localhost:5000/api/v1/${REGISTRATION}`, newUser).then(() => {
			console.log(newUser)
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
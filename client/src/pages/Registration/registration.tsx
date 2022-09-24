import './registration.scss'
import React, { useState, FunctionComponent as FC} from 'react';
// import {User1} from '../../utils/user'
import {Container} from '../../components/Containers/container'
import {Input} from '../../components/ui/Input/input'

export const Registration:FC = () => {
	const [name, setName] = useState("")
	const [surname, setSurname] = useState("")
	const [password, setPassword] = useState("")
	return (
		<div className="form">
			<form onSubmit={() => console.log("click")}>
				<Container title="Регистрация">
					{/* {Auth ? `${userName} ${userSurname}` : ''} */}
					<Input text="Имя" type="text" value={name} onChange={setName}/>
					<Input text="Фамилия" type="text" value={surname} onChange={setSurname}/>
					<Input text="Пароль" type="password" value={password} onChange={setPassword}/>
					<button type="submit">Создать</button>
				</Container>
			</form>
		</div>
	)
}
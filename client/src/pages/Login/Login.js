import './login.scss'
import {User1} from '../../utils/user'
import {Container} from '../../components/Containers/container'
import {Input} from '../../components/ui/Input/input'
import { ButtonMain } from '../../components/ui/Buttons/buttonMain'
import {useDispatch, useSelector} from 'react-redux'
import { useState } from 'react'
import { Fetch_user } from 'store/reducers/userReducer'

export const Login = () => {
	const {user, error, loading} = useSelector(state => state.user)
	const dispatch = useDispatch()
	const [name, setName] = useState("")
	const [password, setPassword] = useState("")


	const test = (event) => {
		dispatch(Fetch_user(User1))
	}

	return (
		<div className="form">
			{/* <form> */}
				<Container title="Вход">
					{user.length !== 0 ? `${user.name} ${user.surname}` : ''}
					<Input text="Имя" type="text" value={name} onChange={setName}/>
					<Input text="Пароль" type="password" value={password} onChange={setPassword}/>
					<ButtonMain text="Войти"/>
					<button onClick={test}>dsffsdf</button>
				</Container>
			{/* </form> */}
		</div>
	)
}
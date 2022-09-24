import './profile.scss'
import React, {FunctionComponent as FC} from 'react'
import {Container} from '../../components/Containers/container'
import {Input} from '../../components/ui/Input/input'
import { Button } from '../../components/ui/Buttons/button'
import { useSelector } from 'react-redux'
import { selectName, selectSurname } from 'store/slices/userSlice'

export const Profile:FC = () => {
	const name = useSelector(selectName)
	const surname = useSelector(selectSurname)
	return (
		<div>
			<div className="profile-container-group">
				<Container id="container-1" title="Профиль">
					<div className="container__content__text">Имя: {name}</div>
					<div className="container__content__text">Фамилия: {surname}</div>
				</Container>
				<Container id="container-2" title="Редактировать">
					<Input text="Имя" type="text" value={name} onChange={() => {console.log("input name")}}/>
					<Input text="Фамилия" type="text" value={surname} onChange={() => {console.log("input surname")}}/>
					<Button text="Сохранить" onClick={() => {console.log("click")}}/>
				</Container>
			</div>
		</div>
	)
}
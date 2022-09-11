import './profile.scss'
import {Container} from '../../components/Containers/container'
import {Input} from '../../components/ui/Input/input'
import { Button } from '../../components/ui/Buttons/button'
import { useSelector } from 'react-redux'
import { selectName, selectSurname } from 'store/slices/userSlice'

export const Profile = () => {
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
					<Input text="Имя" value={name}/>
					<Input text="Фамилия" value={surname}/>
					<Button text="Сохранить"/>
				</Container>
			</div>
		</div>
	)
}
import './profile.scss'
import {User1, User2} from '../../utils/user'
import {Container} from '../../components/Containers/container'
import {Input} from '../../components/ui/Input/input'
import { ButtonMain } from '../../components/ui/Buttons/buttonMain'

export const Profile = () => {
	return (
		<div>
			<div className="profile-container-group">
				<Container id="container-1" title="Профиль">
					<div className="container__content__text">Имя: {User1.name}</div>
					<div className="container__content__text">Фамилия: {User1.surname}</div>
				</Container>
				<Container id="container-2" title="Редактировать">
					<Input text="Имя" value={User1.name}/>
					<Input text="Фамилия" value={User1.surname}/>
					<ButtonMain text="Сохранить"/>
				</Container>
			</div>
		</div>
	)
}
import './userBlock.scss'
import React, {FunctionComponent as FC} from "react";
import { User } from "types/userType";

interface IUserBlockProps {
	user: User,
	del?: Function
}

export const UserBlock:FC<IUserBlockProps> = ({user, del}) => {
	return (
		<div key={user.id} className="user-block">
			<div className="user-block__content">
				<div className="user-block__content__role">{user.role}</div>
				<div className="user-block__content__name">{user.name}</div>
				<div className="user-block__content__surname">{user.surname}</div>
				<div className="user-block__content__email">{user.email}</div>
			</div>
			<button onClick={() => del(user.id)}>Удалить</button>
		</div>
	)
}
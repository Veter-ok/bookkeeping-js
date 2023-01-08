import './header.scss'
import React, {FunctionComponent as FC} from 'react'
import USER_LOGO from '../../assets/img/user.svg'
import {Links} from '../../variables/Links'
import { Link } from 'react-router-dom'
import {useSelector} from 'react-redux'
import {selectAuth, selectRole} from 'store/slices/userSlice'

export const Header:FC = () => {
	const Auth = useSelector(selectAuth)
	const Role = useSelector(selectRole)
	return (
		<div className="header">
			<div className="header__site-title">
				<h1>Бухгалтерия</h1>
			</div>
			<ul className="header__links">
				{Auth ? 
					<>
						<li className="header__links__item"><Link to={Links.MANAGEMENT}>Управление</Link></li>
						<li className="header__links__item"><Link to={Links.DASHBOARD}>Dashboard</Link></li>
						{Role === "admin" ?
							<li className="header__links__item"><Link to={Links.ADMIN}>Админ Панель</Link></li>
						:
							<></>
						}
						<li className="header__links__item"><Link to={Links.PROFILE}><img src={USER_LOGO} alt="user icon"/></Link></li>
					</>
					:
					<>
						<li className="header__links__item"><Link to={Links.MANAGEMENT}>О нас</Link></li>
						<li className="header__links__item"><Link to={Links.LOGIN}>Вход</Link></li>
						<li className="header__links__item"><Link to={Links.REGISTRATION}>Регистрация</Link></li>
					</>
				}
			</ul>
		</div>
	)
}
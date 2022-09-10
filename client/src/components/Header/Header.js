// import { NavLink } from 'react-router-dom';
import './header.scss'
import USER_LOGO from '../../assets/img/user.svg'
import { Link } from 'react-router-dom'

export const Header = () => {
	return (
		<div className="header">
			<div className="header__site-title">
				<h1>Бухгалтерия</h1>
			</div>
			<ul className="header__links">
				<li className="header__links__item"><Link to="/management">Управление</Link></li>
				<li className="header__links__item"><Link to="/dashboard">Dashboard</Link></li>
				<li className="header__links__item"><Link to="/profile"><img src={USER_LOGO} alt="user icon"/></Link></li>
			</ul>
		</div>
	)
}
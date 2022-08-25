import './linkUI.scss'
import { Link } from 'react-router-dom'

export const LinkUI = ({href, children}) => {
	return (
		<div className="link-button">
			<Link to={href}>{children}</Link>
		</div>
	)
}
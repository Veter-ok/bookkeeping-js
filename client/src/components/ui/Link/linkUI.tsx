import './linkUI.scss'
import React, {FunctionComponent as FC} from 'react'
import { Link } from 'react-router-dom'

interface ILinkUIProps {
	href: string,
	children: string
}

export const LinkUI:FC<ILinkUIProps> = ({href, children}) => {
	return (
		<div className="link-button">
			<Link to={href}>{children}</Link>
		</div>
	)
}
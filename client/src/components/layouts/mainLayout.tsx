import './mainLayout.scss'
import React, {FunctionComponent as FC} from 'react'
import {Header} from '../Header/Header'
import {Footer} from '../Footer/Footer'

interface IMainLayoutProps {
	children: JSX.Element | JSX.Element[],
}

export const MainLayout:FC<IMainLayoutProps> = ({children}) => {
	return (
		<div>
			 <Header></Header>
				<div className="context">
					<main>{children}</main>
				</div>
			<Footer></Footer>
		</div>
	)
}
import './mainLayout.scss'
import {Header} from '../Header/Header'
import {Footer} from '../Footer/Footer'

export const MainLayout = ({children}) => {
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
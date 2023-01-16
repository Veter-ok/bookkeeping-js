import './AdminPanel.scss'
import React, {FunctionComponent as FC, useState} from "react"
import UsersAdminWindow from 'components/adminsWindows/usersWindow'
import BanksAdminWindow from 'components/adminsWindows/banksWindow'

const AdminPanel:FC = () => {
	//const id = useSelector()
	const [windowIndex, setWindowIndex] = useState<number>(0)
	const windows = [<UsersAdminWindow/>, <BanksAdminWindow/>]

	return (
		<>
			<div className="switch-windows">
				<ul className="switch-windows__list-windows">
					<li className="" onClick={() => setWindowIndex(0)}>Пользователи</li>
					<li className="" onClick={() => setWindowIndex(1)}>Банки</li>
					<li className="" onClick={() => setWindowIndex(2)}>Карты</li>
					<li className="" onClick={() => setWindowIndex(3)}>Счета</li>
				</ul>
			</div>
			{windows[windowIndex]}
		</>
	)
}

export default AdminPanel
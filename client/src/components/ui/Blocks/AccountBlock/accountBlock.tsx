import './accountBlock.scss'
import React, {FunctionComponent as FC, useEffect, useState} from 'react'
import {UserAccount} from 'types/userType'
import { priceConverter } from '../../../../utils/helpers/priceConverter'
import {Highlighter} from '../../Text/highlighter'
import axios from 'axios'
import { ACCOUNTS } from 'utils/constants/routerLinks'

interface IAccountBlockProps {
	data: UserAccount,
	open: boolean
}

const AccountBlock:FC<IAccountBlockProps> = ({data, open}) => {
	const [isVisible, setIsVisible] = useState<boolean>(false)
	const [allAccounts, setAllAccounts] = useState([])

	useEffect(() => {
		axios.get(`http://localhost:5000/api/v1/${ACCOUNTS}`).then(resp => {
			setAllAccounts(resp.data)
	 	}).catch((err) => console.log(err))
	}, [])

	const moreData = () => {
		if (open) {
			setIsVisible(!isVisible)
		}
	}

	return (
		<>
			{data !== undefined && allAccounts.length !== 0 ?
			<div className="account-block">
				<div className="account-block__block" onClick={() => moreData()}>
					{data.amount > 0 ?
						<div className="account-block__block__text income">+{priceConverter(data.amount)}<Highlighter>₽</Highlighter></div>
						:
						<div className="account-block__block__text expenses">-{priceConverter(data.amount)}<Highlighter>₽</Highlighter></div>
					}
					<div className="account-block__block__date">{data.dateOpen.toLocaleDateString()}</div>
					<div className="account-block__block__info">{allAccounts[data.idAaccount].bank}</div>
				</div>
				{isVisible ?
					<div className="account-block__moreData">
						<div>Сумма: {priceConverter(data.amount)}<Highlighter>₽</Highlighter></div>
						<div>Дата открытия {data.dateOpen.toLocaleDateString()}</div>
						<div>Процент: {allAccounts[data.idAaccount].percent}<Highlighter>%</Highlighter></div>
						<div>Банк: {allAccounts[data.idAaccount].bank}</div>
					</div>
					:
					<div></div>
				}
			</div>
			:
			<div></div>
			}
		</>
	)
}

export default AccountBlock
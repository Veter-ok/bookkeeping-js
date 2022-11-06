import './accountBlock.scss'
import React, {FunctionComponent as FC, useState} from 'react'
import {Account} from 'types/userType'
import { priceConverter } from '../../../../utils/helpers/priceConverter'
import {Highlighter} from '../../Text/highlighter'
import { ACCOUNTS } from 'utils/constants/accounts'

interface IAccountBlockProps {
	data: Account,
	open: boolean
}

const AccountBlock:FC<IAccountBlockProps> = ({data, open}) => {
	const [isVisible, setIsVisible] = useState<boolean>(false)

	const moreData = () => {
		if (open) {
			setIsVisible(!isVisible)
		}
	}

	return (
		<>
			{data !== undefined ?
			<div className="account-block">
				<div className="account-block__block" onClick={() => moreData()}>
					{data.amount > 0 ?
						<div className="account-block__block__text income">+{priceConverter(data.amount)}<Highlighter>₽</Highlighter></div>
						:
						<div className="account-block__block__text expenses">-{priceConverter(data.amount)}<Highlighter>₽</Highlighter></div>
					}
					<div className="account-block__block__date">{data.dateOpen.toLocaleDateString()}</div>
					<div className="account-block__block__info">{ACCOUNTS[data.idAaccount].bank}</div>
				</div>
				{isVisible ?
					<div className="account-block__moreData">
						<div>Сумма: {priceConverter(data.amount)}<Highlighter>₽</Highlighter></div>
						<div>Дата открытия {data.dateOpen.toLocaleDateString()}</div>
						<div>Процент: {ACCOUNTS[data.idAaccount].percent}<Highlighter>%</Highlighter></div>
						<div>Банк: {ACCOUNTS[data.idAaccount].bank}</div>
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
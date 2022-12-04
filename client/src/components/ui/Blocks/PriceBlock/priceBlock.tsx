import './priceBlock.scss'
import React, {FunctionComponent as FC, useState } from 'react'
import { Payment } from 'types/userType'
import { priceConverter } from '../../../../utils/helpers/priceConverter'
import {Highlighter} from '../../Text/highlighter'
import TRASH_LOGO from '../../../../assets/img/trash.svg'
import { useDispatch } from 'react-redux'
import { deletePayment } from 'store/slices/paymentSlice'

interface IPriceBlockProps {
	data: Payment,
	open: boolean
}

export const PriceBlock:FC<IPriceBlockProps> = ({data, open}) => {
	const [isVisible, setIsVisible] = useState<boolean>(false)
	const dispatch = useDispatch()

	return (
		<>
			{data !== undefined ?
			<div className="price-block">
				<div className="price-block__block" onClick={() => {open ? setIsVisible(!isVisible) : setIsVisible(isVisible)}}>
					{data.isIncome ?
						<div className="price-block__block__text income">+{priceConverter(data.price)}<Highlighter>₽</Highlighter></div>
						:
						<div className="price-block__block__text expenses">-{priceConverter(data.price)}<Highlighter>₽</Highlighter></div>
					}
					<div className="price-block__block__date">{new Date(data.date).toLocaleDateString()}</div>
					<div className="price-block__block__info">{data.info}</div>
				</div>
				{isVisible ?
					<div className="price-block__moreData">
						<div>Сумма: {priceConverter(data.price)}<Highlighter>₽</Highlighter></div>
						<div>Дата {data.isIncome ? "начисления" : "списания"}: {new Date(data.date).toLocaleDateString()}</div>
						<div>Банк: {data.bank}</div>
						<div onClick={() => dispatch(deletePayment(data))}><img src={TRASH_LOGO} alt="trash icon"/></div>
					</div>
					:
					<div></div>
				}
			</div>
			:
			<></>
			}
		</>
	)
}
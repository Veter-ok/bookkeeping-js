import './priceBlock.scss'
import { useState } from 'react'
import { priceConverter } from '../../../../utils/priceConverter'
import {Highlighter} from '../../Text/highlighter'
import TRASH_LOGO from '../../../../assets/img/trash.svg'

export const PriceBlock = ({data, open}) => {
	const [isVisible, setIsVisible] = useState(false)
	return (
		<>
			{data !== undefined ?
				<div className="price-block">
					<div className="price-block__block" onClick={() => {open ? setIsVisible(!isVisible) : setIsVisible(isVisible)}}>
						{data.IsIncome ?
							<div className="price-block__block__text income">+{priceConverter(data.price)}<Highlighter>₽</Highlighter></div>
							:
							<div className="price-block__block__text expenses">-{priceConverter(data.price)}<Highlighter>₽</Highlighter></div>
						}
						<div className="price-block__block__date">{data.date.toLocaleDateString()}</div>
						<div className="price-block__block__info">{data.info}</div>
					</div>
					{isVisible ?
						<div className="price-block__moreData">
							<div>Сумма: {priceConverter(data.price)}<Highlighter>₽</Highlighter></div>
							<div>Дата {data.IsIncome ? "начисления" : "списания"}: {data.date.toLocaleDateString()}</div>
							<div>Банк: {data.bank}</div>
							<div><img src={TRASH_LOGO } alt="trash icon"/></div>
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
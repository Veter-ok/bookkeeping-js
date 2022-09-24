import './bankBlock.scss'
import React, {FunctionComponent as FC} from 'react'
import { Banks } from 'types/userType'
import { priceConverter } from '../../../../utils/priceConverter'
import { Highlighter } from '../../Text/highlighter'

interface IBankBlockProps {
	data: Banks
}

export const BankBlock:FC<IBankBlockProps> = ({data}) => {
	return (
		<>
			{data !== undefined ?
			<div key={data.name} className="block">
				<div className="block__content">
					<div className="block__content__name">{data.name}</div>
					<div className="block__content__money">{priceConverter(data.money)}<Highlighter>₽</Highlighter></div>
				</div>
			</div>
			:
			<div></div>
			}
		</>
	)
}
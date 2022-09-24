import './priceList.scss'
import React, {FunctionComponent as FC} from 'react'
import { PriceBlock } from '../../Blocks/PriceBlock/priceBlock'
import { useSelector } from 'react-redux'
import { selectHistory } from 'store/slices/paymentSlice'
import { Payment } from 'types/userType'

interface IPriceListProps {
	full: boolean,
	data?: Array<Payment>
}

export const PriceList:FC<IPriceListProps> = ({full, data}) => {
	const hitory = useSelector(selectHistory)
	return (
		<div>
			{full ? 
			<div>
				{data.map((payment:Payment) => 
					<PriceBlock key={payment.id} data={payment} open={true}/>
				)}
			</div>
			:
			<div>
				{hitory.slice(0, 6).map((payment:Payment) => 
					<PriceBlock key={payment.id} data={payment} open={false}/>
				)}
			</div>
			}
		</div>
	)
}
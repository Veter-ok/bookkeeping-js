import './priceList.scss'
import { PriceBlock } from '../../Blocks/PriceBlock/priceBlock'
import { useSelector } from 'react-redux'
import { selectHistory } from 'store/slices/paymentSlice'

export const PriceList = ({full}) => {
	const hitory = useSelector(selectHistory)
	return (
		<div>
			{full ? 
			<div>

				{hitory.map((payment, index) => 
					<PriceBlock key={payment.id} index={index} data={payment} open={true}/>
				)}
			</div>
			:
			<div>
				{hitory.slice(0, 6).map((payment, index) => 
					<PriceBlock key={payment.id} index={index} data={payment} open={false}/>
				)}
			</div>
			}
		</div>
	)
}
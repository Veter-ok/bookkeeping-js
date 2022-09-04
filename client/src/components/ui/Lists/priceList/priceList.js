import './priceList.scss'
import { PriceBlock } from '../../Blocks/PriceBlock/priceBlock'

export const PriceList = ({full, data}) => {
	return (
		<div>
			{full ? 
			<div>
				{data.map((payment, index) => 
					<PriceBlock key={payment.id} index={index} data={payment} open={true}/>
				)}
			</div>
			:
			<div>
				{[0, 1, 2, 3, 4, 5].map(index => 
					<PriceBlock key={data[index].id} index={index} data={data[index]} open={false}/>
				)}
			</div>
			}
		</div>
	)
}
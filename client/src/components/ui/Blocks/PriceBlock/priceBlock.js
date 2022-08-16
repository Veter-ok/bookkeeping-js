import './block.scss'
import { priceConverter } from '../../../../utils/priceConverter'

export const PriceBlock = ({data}) => {
	return (
		<div className="price-block" key={data.id}>
			{data.IsIncome ?
				<h3 className="price-block__text income">+{priceConverter(data.price)}</h3>
				:
				<h3 className="price-block__text expenses">-{priceConverter(data.price)}</h3>
			}
			<h5 className="price-block__date">{data.date}</h5>
			<h5 className="price-block__info">{data.info}</h5>
		</div>
	)
}
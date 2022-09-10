import { BankBlock } from '../../Blocks/BankBlock/bankBlock'
import {useSelector} from 'react-redux'
import { selectBanks } from 'store/slices/paymentSlice'

export const BankList = () => {
	const banks = useSelector(selectBanks)
	return (
		<div>
			{banks.map(data => 
				<BankBlock key={data.name} data={data}/>
			)}
			{/* {full ? 
			<div>
				{User.history.map((data, index) => 
					<PriceBlock key={index} data={data} open={true}/>
				)}
			</div>
			:
			<div>
				{[0, 1, 2, 3, 4, 5].map(index => 
					<PriceBlock key={index} data={User.history[index]} open={false}/>
				)}
			</div>
			} */}
		</div>
	)
}
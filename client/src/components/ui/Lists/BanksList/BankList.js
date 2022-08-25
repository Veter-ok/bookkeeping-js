import {User1, User2} from '../../../../utils/user'
import { BankBlock } from '../../Blocks/BankBlock/bankBlock'

export const BankList = () => {
	return (
		<div>
			{User1.banks.map(data => 
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
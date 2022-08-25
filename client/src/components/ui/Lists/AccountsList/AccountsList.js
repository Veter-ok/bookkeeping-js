import './accountList.scss'
import {User1, User2} from '../../../../utils/user'
import { AccountBlock } from '../../Blocks/AccountBlock/accountBlock'

export const AccountList = () => {
	return (
		<div>
			{User1.accounts.map((data, index) => 
				<AccountBlock key={index} data={data} open={true}/>
			)}
		</div>
	)
}
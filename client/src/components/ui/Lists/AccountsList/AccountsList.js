import './accountList.scss'
import { AccountBlock } from '../../Blocks/AccountBlock/accountBlock'
import { useSelector } from 'react-redux'
import { selectAccounts } from 'store/slices/paymentSlice'

export const AccountList = () => {
	const accounts = useSelector(selectAccounts)
	return (
		<div>
			{accounts.map((data, index) => 
				<AccountBlock key={index} data={data} open={true}/>
			)}
		</div>
	)
}
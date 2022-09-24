import './accountList.scss'
import React, {FunctionComponent as FC} from 'react'
import { AccountBlock } from '../../Blocks/AccountBlock/accountBlock'
import { useSelector } from 'react-redux'
import { selectAccounts } from 'store/slices/paymentSlice'
import { Account } from 'types/userType'

export const AccountList:FC = () => {
	const accounts = useSelector(selectAccounts)
	return (
		<div>
			{accounts.map((data:Account, index:number) => 
				<AccountBlock key={index} data={data} open={true}/>
			)}
		</div>
	)
}
import React, {FunctionComponent as FC} from 'react'
import AccountBlock from '../Blocks/AccountBlock/accountBlock'
import { BankBlock } from '../Blocks/BankBlock/bankBlock'
import { PriceBlock } from '../Blocks/PriceBlock/priceBlock'
import { useSelector } from 'react-redux'
import { selectAccounts, selectBanks, selectHistory} from 'store/slices/paymentSlice'
import { Account } from 'types/userType'
import { Banks } from 'types/userType'
import { Payment } from 'types/userType'

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

export const BankList:FC = () => {
	const banks = useSelector(selectBanks)
	return (
		<div>
			{banks.map((data: Banks) => 
				<BankBlock key={data.name} data={data}/>
			)}
		</div>
	)
}

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
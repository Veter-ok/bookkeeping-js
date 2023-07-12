import React, {FunctionComponent as FC, useEffect, useState} from 'react'
import AccountBlock from '../Blocks/AccountBlock/accountBlock'
import { BankBlock } from '../Blocks/BankBlock/bankBlock'
import { PriceBlock } from '../Blocks/PriceBlock/priceBlock'
import { useSelector } from 'react-redux'
import { selectAccounts, selectBanks, selectHistory} from 'store/slices/paymentSlice'
import { UserAccount } from 'types/userType'
import { Payment } from 'types/userType'
import { UserBank } from 'types/userType'

export const AccountList:FC = () => {
	const accounts = useSelector(selectAccounts)

	return (
		<div>
			{accounts.map((data:UserAccount, index:number) => 
				<AccountBlock key={index} data={data} open={true}/>
			)}
		</div>
	)
}

export const BankList:FC = () => {
	const banks = useSelector(selectBanks)
	return (
		<div>
			{banks.map((data: UserBank) => 
				<BankBlock key={data.name} data={data}/>
			)}
		</div>
	)
}

interface IPriceListProps {
	full: boolean,
	data?: Payment[]
}

export const PriceList:FC<IPriceListProps> = ({full, data}) => {
	const hitory = useSelector(selectHistory)
	const [currentlyData, setCurrentlyData] = useState(data ? data : hitory)

	useEffect(() => {
		let newCurrentlyData = [...hitory]
		newCurrentlyData.sort(function(a:Payment, b:Payment) {
			if (new Date(a.date) > new Date(b.date)){
				return -1
			}
			if ((new Date(a.date) < new Date(b.date))){
				return 1
			}
			return 0
		})
		setCurrentlyData(newCurrentlyData)
	}, [hitory])

	return (
		<div>
			{full ? 
			<div>
				{currentlyData.map((payment:Payment) => 
					<PriceBlock key={payment.id} data={payment} open={true}/>
				)}
			</div>
			:
			<div>
				{currentlyData.slice(0, 6).map((payment:Payment) => 
					<PriceBlock key={payment.id} data={payment} open={false}/>
				)}
			</div>
			}
		</div>
	)
}
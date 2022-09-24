import React, {FunctionComponent as FC} from 'react'
import { BankBlock } from '../../Blocks/BankBlock/bankBlock'
import {useSelector} from 'react-redux'
import { selectBanks } from 'store/slices/paymentSlice'
import { Banks } from 'types/userType'

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
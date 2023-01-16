import './bankBlock.scss'
import React, {FunctionComponent as FC} from "react";
import { Bank } from 'types/banksTypes';

interface IBankBlock {
	bank: Bank
}

const BankBlock:FC<IBankBlock> = ({bank}) => {
	return (
		<div className="bank-block">
			<div className="bank-block__content">
				<div className="bank-block__content__name">{bank.name}</div>
			</div>
		</div>
	)
}

export default BankBlock
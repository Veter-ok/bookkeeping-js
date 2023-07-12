import './bankBlock.scss'
import React, {FunctionComponent as FC} from "react";
import { Bank } from 'types/mainTypes';

interface IBankBlock {
	bank: Bank,
	del?: Function
}

const BankBlock:FC<IBankBlock> = ({bank, del}) => {
	return (
		<div className="bank-block">
			<div className="bank-block__content">
				<div className="bank-block__content__name">{bank.name}</div>
				<button onClick={() => del(bank.id)}>Удалить</button>
			</div>
		</div>
	)
}

export default BankBlock
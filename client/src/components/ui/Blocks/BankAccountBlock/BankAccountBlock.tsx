import './BankAccountBlock.scss'
import React, {FunctionComponent as FC} from "react";
import { BanksAccount } from "utils/constants/accounts";

interface IBankAccountBlockProps {
	account: BanksAccount
}

const BankAccountBlock:FC<IBankAccountBlockProps> = ({account}) => {
	return (
		<div className="bank-account-block">
			<div className="bank-account-block__content">
				<div className="bank-account-block__content__name">{account.name}</div>
				<div className="bank-account-block__content__bank">от <b>{account.bank}</b></div>
				<div className="bank-account-block__content__description">
					<div className="bank-account-block__content__currency"></div>
					<div className="bank-account-block__content__duration">Срок: {account.duration} месяц</div>
				</div>
			</div>
		</div>
	)
}

export default BankAccountBlock
import './BankAccountBlock.scss'
import React, {FunctionComponent as FC} from "react";
import { Account, Bank} from 'types/mainTypes';
import { getBankByID } from 'utils/helpers/getData';

interface IBankAccountBlockProps {
	account: Account
	banks: Bank[] 
}

const BankAccountBlock:FC<IBankAccountBlockProps> = ({account, banks}) => {
	return (
		<div className="bank-account-block">
			<div className="bank-account-block__content">
				<div className="bank-account-block__content__name">{account.name}</div>
				<div className="bank-account-block__content__bank">от <b>{getBankByID(banks, account.bank_id).name}</b></div>
				<div className="bank-account-block__content__description">
					<div className="bank-account-block__content__currency"></div>
					<div className="bank-account-block__content__duration">Срок: {'...'} месяц</div>
				</div>
			</div>
		</div>
	)
}

export default BankAccountBlock
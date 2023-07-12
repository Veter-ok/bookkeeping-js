import './accountBlock.scss'
import React, {FunctionComponent as FC} from "react";
import { Account } from 'types/mainTypes';

interface IAccountAdminBlock {
	account: Account,
	del?: Function
}

const AccountAdminBlock:FC<IAccountAdminBlock> = ({account, del}) => {
	return (
		<div className="bank-block">
			<div className="bank-block__content">
				<div className="bank-block__content__name">{account.name}</div>
				<button onClick={() => del(account.bank_id)}>Удалить</button>
			</div>
		</div>
	)
}

export default AccountAdminBlock
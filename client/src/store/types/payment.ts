import { BanksAccount } from 'utils/constants/accounts';
import {Account, Banks, Card, Payment, Years} from '../../types/userType'

export interface PaymentState {
	banks: Array<Banks>,
	cards: Array<Card>,
	accounts: Array<Account>,
	years: Years | null,
	history: Array<Payment>,
}

export interface AccountPaymentAction {
	id: number, // for user accounts
	idAaccount: number, // for all types of account
	amount: number,
	dateOpen: Date,
	allAccounts: Array<BanksAccount> | [],
}
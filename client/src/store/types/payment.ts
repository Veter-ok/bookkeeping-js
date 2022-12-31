import {Account, Card, Payment, Years} from '../../types/userType'
import { BanksAccount, UserBank } from 'types/banksTypes';

export interface PaymentState {
	banks: Array<UserBank>,
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
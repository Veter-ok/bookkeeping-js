import {Account, Banks, Payment, Years} from '../../types/userType'

export interface PaymentState {
	banks: Array<Banks> | null,
	accounts: Array<Account>  | null,
	years: Years | null,
	history: Array<Payment> | null,
}
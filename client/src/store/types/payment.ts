import {Account, Banks, Card, Payment, Years} from '../../types/userType'

export interface PaymentState {
	banks: Array<Banks> | null,
	cards: Array<Card> | null,
	accounts: Array<Account>  | null,
	years: Years | null,
	history: Array<Payment> | null,
}
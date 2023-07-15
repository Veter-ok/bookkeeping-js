import { Account, Card, Years } from "types/mainTypes";
import { Payment, UserAccount, UserBank } from "types/userType";

export interface PaymentState {
	banks: UserBank[],
	cards: Card[],
	accounts: UserAccount[],
	years: Years | null,
	history: Payment[],
}

export interface AccountPaymentAction extends UserAccount {
	allAccounts: Account[] | [],
}
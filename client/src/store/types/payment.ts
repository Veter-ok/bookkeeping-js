import { Account, Card } from "types/mainTypes";
import { Payment, UserAccount, UserBank, Years } from "types/userType";

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
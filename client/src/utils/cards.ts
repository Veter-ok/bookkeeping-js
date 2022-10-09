import { Card } from 'types/userType';
import TinkoffBankImg from '../assets/img/cards/TinkoffBlack.png'
import AlfaCardImg from '../assets/img/cards/Alfa-Card.png'
import { ALFA_BANK, TINKOFF_BANK } from "variables/Banks";

export const TinkoffBlack:Card = {
	id: 1,
	name: 'Тинькофф Black',
	img: TinkoffBankImg,
	bank: TINKOFF_BANK,
	percent: 3,
	description: ''
}

export const AlfafBlack:Card = {
	id: 2,
	name: 'Альфа-Карта',
	img: AlfaCardImg,
	bank: ALFA_BANK,
	percent: 2,
	description: '- 2% на всё (при покупках от 100,000₽)\n- 1,5% на всё (при покупках от 10,000₽)'
}

export const CARDS:Array<Card> = [TinkoffBlack, AlfafBlack]
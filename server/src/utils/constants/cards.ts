import { Card } from "../../types/userTypes.js"
import { ALFA_BANK, TINKOFF_BANK } from "./Banks.js"

export const TinkoffBlack:Card = {
	id: 1,
	name: 'Тинькофф Black',
	img: 'TinkoffBlack.png',
	bank: TINKOFF_BANK,
	percent: 3,
	description: ''
}

export const AlfafBlack:Card = {
	id: 2,
	name: 'Альфа-Карта',
	img:  'Alfa-card.png',
	bank: ALFA_BANK,
	percent: 2,
	description: '- 2% при покупках от 100,000₽\n- 1,5% на всё'
}

export const CARDS:Array<Card> = [TinkoffBlack, AlfafBlack]
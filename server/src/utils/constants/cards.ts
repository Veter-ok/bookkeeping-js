import { Card } from "../../types/mainTypes.js"

export const TinkoffBlack:Card = {
	id: 1,
	bank_id: 1,
	image: 'TinkoffBlack.png',
	percent: 1,
	title: 'Тинькофф Black',
	description: ''
}

export const AlfafBlack:Card = {
	id: 2,
	bank_id: 2,
	image:  'Alfa-card.png',
	percent: 2,
	title: '',
	description: '- 2% при покупках от 100,000₽\n- 1,5% на всё'
}

export const CARDS:Array<Card> = [TinkoffBlack, AlfafBlack]
import { Card } from "../../types/userTypes.js"
import { ALFA_BANK, TINKOFF_BANK } from "./Banks.js"
import path from 'path';
import {fileURLToPath} from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export const TinkoffBlack:Card = {
	id: 1,
	name: 'Тинькофф Black',
	img: __dirname + '/images/' + 'Alfa-card.png',
	bank: TINKOFF_BANK,
	percent: 3,
	description: ''
}

export const AlfafBlack:Card = {
	id: 2,
	name: 'Альфа-Карта',
	img:  __dirname + '/images/' + 'TinkoffBlack.png',
	bank: ALFA_BANK,
	percent: 2,
	description: '- 2% при покупках от 100,000₽\n- 1,5% на всё'
}

export const CARDS:Array<Card> = [TinkoffBlack, AlfafBlack]
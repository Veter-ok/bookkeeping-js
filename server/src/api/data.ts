import {Request, Response} from 'express'
import { ACCOUNTS } from '../utils/constants/accounts.js'
import { BANKS } from '../utils/constants/Banks.js'
import { CARDS } from '../utils/constants/cards.js'

export const accounts = (req:Request, res: Response) => {
	res.send(ACCOUNTS)
}

export const banks_name = (req:Request, res: Response) => {
	res.send(BANKS)
}

export const cards = (req:Request, res: Response) => {
	res.send(CARDS)
}
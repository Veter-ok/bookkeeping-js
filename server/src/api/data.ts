import {Request, Response} from 'express'
import { ACCOUNTS } from '../utils/constants/accounts.js'
import { BANKS } from '../utils/constants/Banks.js'

export const accounts = (req:Request, res: Response) => {
	console.log('get')
	res.send(ACCOUNTS)
}

export const banks_name = (req:Request, res: Response) => {
	res.send(BANKS)
}
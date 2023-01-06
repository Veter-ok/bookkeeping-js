import {Request, Response} from 'express'
import { CARDS } from '../utils/constants/cards.js'

class Cards {
	async cards(req:Request, res:Response) {
		res.send(CARDS)
	}
}

export default new Cards()
import {Request, Response} from 'express'
import { CARDS } from '../utils/constants/cards.js'

class userCardsController {
	async cards(req:Request, res:Response) {
		res.send(CARDS)
	}
}

export default new userCardsController()
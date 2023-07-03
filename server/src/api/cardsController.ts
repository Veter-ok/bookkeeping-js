import {Request, Response} from 'express'
import { Card } from '../types/mainTypes.js'
import pool from '../database/index.js'

interface AddCardType<T> extends Request {
	body: T
}

class cardsController {
	async get_cards(req: Request, res: Response){
		await pool.query("SELECT * FROM cards").then((response) => {
			res.status(200).json({"msg":response.rows})
		}).catch((err) => {
			res.status(500).json({"msg": err})
		})
	}

	async add_card(req:AddCardType<Card>, res:Response) {
		const {id, bank_id, percent, image, title, description} = req.body
		await pool.query("INSERT INTO cards (id, bank_id, percent, image, title, description) VALUES($1, $2, $3, $4, $5, $6)",
		[id, bank_id, percent, image, title, description]).then((resp) => {
			res.status(200).json({"msg": "success"})
		}).catch((err) => {
			res.status(500).json({"msg": err})
		})
	}
	async delete_card(req:Request, res:Response) {
		
	}
}

export default new cardsController()
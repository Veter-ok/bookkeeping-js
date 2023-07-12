import {Request, Response} from 'express'
import { Card } from '../../types/mainTypes.js'
import {v4 as uuid, v4} from 'uuid'
import path from 'path'
import pool from '../../database/index.js'
import { fileURLToPath } from 'url'

interface AddCardType extends Request {
	files: any
}

class cardsController {
	async get_cards(req: Request, res: Response){
		await pool.query("SELECT * FROM cards").then((response) => {
			if (response.rows.length === 0){
				res.status(200).json([])
			}else{
				res.status(200).json(response.rows)
			}
		}).catch((err) => {
			res.status(500).json({"msg": err})
		})
	}

	async add_card(req:AddCardType, res:Response) {
		const {bank_id, percent, title, description} = req.body
		const {image} = req.files
		const __filename = fileURLToPath(import.meta.url);
		const __dirname = path.dirname(__filename);
		const imageName = uuid() + ".jpeg"
		await pool.query("INSERT INTO cards (bank_id, title, percent, description, image) VALUES($1, $2, $3, $4, $5)",
		[Number(bank_id), title, Number(percent), description, imageName]).then((resp) => {
			image.mv(path.resolve(__dirname, '../..', 'public/cards', imageName))
			res.status(200).json({"msg": "success"})
		}).catch((err) => {
			res.status(500).json({"msg": err})
		})
	}
	async delete_card(req:Request, res:Response) {
		
	}
}

export default new cardsController()
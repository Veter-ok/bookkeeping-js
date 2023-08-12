import {Request, Response} from 'express'
import pool from '../../database/index.js'

class UserCardsController {
	async get(req:Request, res:Response) {
		const id = req.headers.user_id
		await pool.query("SELECT * FROM users_cards WHERE=1$", [id]).then((response) => {
			res.status(200).json(response.rows)
		}).catch((error) => {
			res.status(500).json({message: error})
		})
	}
	async add(req:Request, res:Response){
		const user_id = req.headers.user_id
		const {type_id, account_id, date} = req.body
		await pool.query("INSERT INTO users_cards(user_id, type_id, account_id, amount, date) FROM users_cards VALUES($1, $2, $3, $4, $5)", 
		[user_id, type_id, account_id, 0, date]).then((response) => {
			res.status(200).json({message: "success"})
		}).catch((error) => {
			res.status(500).json({message: error})
		})
	}
}

export default new UserCardsController()
import {Request, Response, response} from 'express'
import pool from '../../database/index.js'
import { CARDS } from '../../utils/constants/cards.js'

class UserController {
	async cards(req:Request, res:Response) {
		res.send(CARDS)
	}
	async add_card(req:Request, res:Response){

	}
	async payments(req: Request, res: Response){
		const {id} = req.params
		await pool.query("SELECT * FROM payments WHERE user_id=$1", [id]).then((response) => {
			res.status(200).send(response.row)
		}).catch((error) => {
			res.status(500).json({message: error})
		})
		
	}
	async payment(req: Request, res: Response){
		const {id, id_payment} = req.params
		await pool.query("SELECT * FROM payments WHERE user_id=$1 AND id=$2", [id, id_payment]).then((response) => {
			if (response.rowCount == 0){
				res.status(500).json({message: "payment not found"})
			}else{
				res.status(200).send(response.row[0])
			}
		}).catch((error) => {
			res.status(500).json({message: error})
		})
	}
	async add_payment(req: Request, res: Response){

	}
	async get_accounts(req: Request, res: Response){
		const {id} = req.params
		await pool.query("SELECT * FROM users_bank_accounts WHERE user_id=$1", [id]).then((response) => {
			if (response.rowCount == 0){
				res.status(500).json({msg: "accounts not found"})
			}else{
				res.status(200).send(response.row)
			}
		}).catch((error) => {
			res.status(500).json({message: error})
		})
	}
	async add_account(req: Request, res: Response){

	}
}

export default new UserController()
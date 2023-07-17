import {Request, Response, response} from 'express'
import pool from '../../database/index.js'

class UserAccountsController {
	async get(req: Request, res: Response){
		const {id} = req.params
		console.log('asds')
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
	async add(req: Request, res: Response){

	}
}

export default new UserAccountsController()
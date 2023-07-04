import {Request, Response} from 'express'
import pool from '../../database/index.js'
import { Account } from '../../types/mainTypes.js'


interface RequestAddAccountPropsType extends Request {
	admin_token: string
	accountData: Account
}

class Accounts {
	async accounts(req:Request, res:Response) {
		await pool.query("SELECT * FROM accounts").then((response) => {
			res.status(200).send(response.rows)
		}).catch((err) => {
			res.status(500).json({"msg": err})
		})
	}
	async add_account(req:RequestAddAccountPropsType, res:Response){
		const {admin_token, accountData} = req.body
		const {bank_id, title, percent, description} = accountData
		if (admin_token == '123'){
			await pool.query("INSERT INTO accounts (bank_id, title, percent, description) VALUES($1, $2, $3, $4)", 
			[bank_id, title, percent, description]).then((reps) => {
				console.log(accountData)
				res.status(200).json({"msg": "success"})
			}).catch((err) => {
				console.log(err)
				res.status(500).json({"msg": err})
			})
		}

	}
}

export default new Accounts()
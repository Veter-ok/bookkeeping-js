import {Request, Response} from 'express'
import {BanksAccount } from '../utils/constants/accounts.js'
import pool from '../database/index.js'

class Accounts {
	async accounts(req:Request, res:Response) {
		await pool.query("SELECT * FROM accounts").then((response) => {
			res.status(200).send(response.rows)
		}).catch((err) => {
			res.status(500).json({"msg": err})
		})
	}
}

export default new Accounts()
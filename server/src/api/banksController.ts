import {Request, Response} from 'express'
import pool from '../database/index.js'

class Banks {
	async allbanks(req:Request, res:Response) {
		await pool.query("SELECT * FROM Banks").then((response) => {
			res.status(200).send(response.rows)
		}).catch((err) => {
			res.status(500).json({"msg": err})
		})
	}
}

export default new Banks()
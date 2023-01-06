import {Request, Response} from 'express'
import pool from '../database/index.js'

class Banks {
	async allbanks(req:Request, res:Response) {
		await pool.query("SELECT * FROM Banks").then((response) => {
			console.log(response.rows)
			res.send(response.rows)
		})
	}
}

export default new Banks()
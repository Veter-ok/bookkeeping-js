import { Request, Response } from "express";
import pool from '../database/index.js'

class AdminBanksController {
	async add_bank(req: Request, res: Response) {
		const {admin_token, name} = req.body
		await pool.query("INSERT INTO banks (name) VALUES($1)", [name]).then((resp) => {
			res.status(200).json({msg: "success"})
		}).catch((err) => {
			res.status(500).json({msg: err})
		})
	}
	async delete_bank(req: Request, res: Response){
		const {admin_token, bank_id} = req.params
		await pool.query("DELETE FROM banks WHERE bank_id=$1", [bank_id]).then((resp) => {
			console.log(resp)
			res.status(200).json({msg: "success"})
		}).catch((err) => {
			console.log(err)
			res.status(500).json({msg: err})
		})
	}
}

export default new AdminBanksController
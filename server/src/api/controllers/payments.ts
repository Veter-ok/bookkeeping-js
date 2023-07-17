import {Request, Response} from 'express'
import pool from '../../database/index.js'

class PaymentsController {
	async get(req: Request, res: Response){
		const id = req.headers.user_id
		await pool.query("SELECT * FROM payments WHERE user_id=$1", [id]).then((response) => {
			res.status(200).json(response.row)
		}).catch((error) => {
			res.status(500).json({message: error})
		})
		
	}
	async getOne(req: Request, res: Response){
		const {id_payment} = req.params
		const id = req.headers.user_id
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
	async add(req: Request, res: Response){

	}
}

export default new PaymentsController()
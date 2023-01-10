import { Request, Response } from "express";
import pool from '../database/index.js'

class AdminUserController {
	async get_all_user(req: Request, res: Response){
		await pool.query("SELECT * FROM users").then((response) => {
			res.status(200).send(response.rows)
		}).catch((err) => {
			res.status(500).json({"msg": err})
		})
	}
	async add_user(req: Request, res: Response){
		const {admin_token, name, surname, role, email, password, birthday} = req.body
		console.log(req.body)
		await pool.query("INSERT INTO users (role, name, email, surname, password, birthday) VALUES($1, $2, $3, $4, $5, $6)", 
		[role, name, email, surname, password, birthday]).then((resp) => {
			res.status(200).json({"msg": "success"})
		}).catch((err) => {
			res.status(500).json({"msg": err})
		})
	}
	async delete_user(req: Request, res: Response){
		const {admin_token, user_id} = req.params
		await pool.query("SELECT * FROM users", )
		await pool.query("DELETE FROM users WHERE id=$1", [user_id]).then((response) => {
			if (response.rowCount == 0){
				res.status(500).json({'msg': 'user with given id not found'})
			}else{
				res.status(200).json({'msg': 'success'})
			}
		}).catch((err) => {
			res.status(500).json({"msg": err})
		})
	}
}

export default new AdminUserController()
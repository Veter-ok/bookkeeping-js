import {Request, Response} from 'express'
import { UserType } from '../types/userTypes.js'
import pool from '../database/index.js'

interface RequestLogin {
	name: string,
	password: string
}

interface RequestLoginError {
	code?: string,
	msg: string
}

class User {
	async login(req:Request<RequestLogin>, res: Response<UserType | RequestLoginError>) {
		const {name, password} = req.body
		await pool.query("SELECT * FROM Users WHERE name=$1", [name]).then((response) => {
			if (response.rows.length !== 0) {
				if (response.rows[0].password === password){
					res.json(response.rows[0]);
				}else{
					res.status(500).json({'msg': 'wrong password'})
				}
			}else{
				res.status(500).json({'msg': 'user not found'})
			}
		})
		console.log('[server] send data from /api/v1/auth/login')
	}
	async singUp(req:Request, res:Response) {
		const {name, surname, email, password, birthday} = req.body
		await pool.query("INSERT INTO Users (role, name, email, surname, password, birthday) VALUES($1, $2, $3, $4, $5, $6)", 
			['user', name, email, surname, password, birthday]).then((response) => {
				res.status(200).json({"msg": "success"})
			}).catch((err) => {
				console.log(err)
				res.status(500).json({"msg": err})
			})
	}
}

export default new User()
import {Request, Response} from 'express'
import { UserType } from '../../types/userTypes.js'
import pool from '../../database/index.js'
import jwt from 'jsonwebtoken'
import bcrypt from 'bcryptjs'

interface RequestLogin {
	name: string,
	password: string
}

interface ResponseLoginError {
	code?: string,
	message: string | Error
}

interface ResponseLogin {
	user: UserType,
	accessToken: any
}

class Auth {
	async login(req:Request<RequestLogin>, res: Response<ResponseLogin | ResponseLoginError>) {
		const {email, password} = req.body
		await pool.query("SELECT * FROM Users WHERE email=$1", [email]).then((response_db) => {
			if (response_db.rows.length !== 0) {
				const user = response_db.rows[0]
				bcrypt.compare(password, user.password, (err, isMatch) => {
					if (err) res.status(500).json({'message': err})
					if (isMatch){
						const {password, ...user_data} = user
						const accessToken = jwt.sign({
							id: user.id,
							isAdmin: user.role
						}, process.env.JWT_SECRET_KEY, {expiresIn: '12h'})
						res.status(200).json({user: user_data, accessToken: accessToken});
					}else{
						res.status(500).json({'message': 'wrong password'})
					}
				})
			}else{
				res.status(500).json({'message': 'user not found'})
			}
		})
		console.log('[server] send data from /api/v1/auth/login')
	}
	async singUp(req:Request, res:Response) {
		const {name, surname, email, password, birthday} = req.body
		await pool.query("INSERT INTO Users (isAdmin, name, surname, email, password, birthday) VALUES($1, $2, $3, $4, $5, $6)", 
			[false, name, surname, email, password, birthday]).then((response) => {
				res.status(200).json({"msg": "success"})
			}).catch((err) => {
				res.status(500).json({"msg": err})
			})
	}
	async isAuth(req: Request, res:Response) {
		const user_id = req.headers.user_id
		await pool.query("SELECT id, isAdmin, name, surname, email, birthday FROM users WHERE id=$1", [user_id]).then((resp) => {
			res.status(200).json(resp.rows[0])
		}).catch((err) => {
			res.status(500).json({"message": err})
		})
	}
}

export default new Auth()
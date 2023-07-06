import {Request, Response} from 'express'
import { UserType } from '../../types/userTypes.js'
import pool from '../../database/index.js'
import jwt from 'jsonwebtoken'

interface RequestLogin {
	name: string,
	password: string
}

interface ResponseLoginError {
	code?: string,
	msg: string
}

interface ResponseLogin {
	user: UserType,
	accessToken: any
}

class Auth {
	async login(req:Request<RequestLogin>, res: Response<ResponseLogin | ResponseLoginError>) {
		const {name, password} = req.body
		await pool.query("SELECT * FROM Users WHERE name=$1", [name]).then((response_db) => {
			if (response_db.rows.length !== 0) {
				const user = response_db.rows[0]
				if (user.password === password){
					const {password, ...user_data} = user
					const accessToken = jwt.sign({
						id: user.id,
						isAdmin: user.role
					}, process.env.JWT_SECRET_KEY, {expiresIn: '12h'})
					res.status(200).json({user: user_data, accessToken: accessToken});
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
	async isAuth(req: Request, res:Response) {
		res.status(200).json("ok")
	}
}

export default new Auth()
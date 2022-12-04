import {Request, Response} from 'express'
import { User1 } from '../utils/constants/user.js'

export const login = (req:Request, res: Response) => {
	res.send(User1)
	console.log('[server] send data from /api/vi/auth/login')
}
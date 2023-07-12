import {Request, Response} from 'express'
import jwt from 'jsonwebtoken'

export const verifyToken = (req: Request, res: Response, next) => {
	const authHeader = req.headers.token
	if (authHeader && authHeader !== ""){
		jwt.verify(authHeader, process.env.JWT_SECRET_KEY, (err, user) => {
			if (err) res.status(403).json({message: "Token is not valid"})
			if (!user) res.status(403).json({message: "Not auth"})
			req.headers["user_id"] = user.id
			next()
		})
	}else{
		res.status(401).json({message: "Not auth"})
	}
}

export const checkPermission = (req: Request, res: Response, next) => {
	const authHeader = req.headers.token
	if (authHeader){
		jwt.verify(authHeader, process.env.JWT_SECRET_KEY, (err, user) => {
			if (err) res.status(403).json({message: "Token is not valid"})
			if (!user.isAdmin) res.status(403).json({message: "You are not allowed"})
			next()
		})
	}else{
		res.status(401).json({message: "Not auth"})
	}
}
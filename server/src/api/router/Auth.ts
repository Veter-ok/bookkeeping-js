import { Router} from 'express'
import { verifyToken } from '../verifyToken.js'
import Auth from '../controllers/auth.js'

export const authRouter = Router()

authRouter.post('/login', Auth.login)
authRouter.post('/registration', Auth.singUp)
authRouter.get('/isAuth', verifyToken, Auth.isAuth)
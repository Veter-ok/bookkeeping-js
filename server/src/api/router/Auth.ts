import { Router} from 'express'
import Auth from '../controllers/auth.js'

export const authRouter = Router()

authRouter.post('/login', Auth.login)
authRouter.post('/registration', Auth.singUp)
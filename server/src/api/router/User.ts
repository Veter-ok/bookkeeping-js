import { Router} from 'express'
import UserController from '../controllers/userController.js'

export const userRouter = Router()

userRouter.get('/payments', UserController.payments)
userRouter.get('/payment/:id_payment', UserController.payment)
userRouter.post('/add_payment', UserController.add_payment)
userRouter.get('/accounts', UserController.get_accounts)
userRouter.post('/add_account', UserController.add_account)
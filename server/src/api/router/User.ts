import { Router} from 'express'
import PaymentsController from '../controllers/payments.js'
import UserAccountsController from '../controllers/user_accounts.js'

export const userRouter = Router()

userRouter.get('/payments', PaymentsController.get)
userRouter.get('/payment/:id_payment', PaymentsController.getOne)
userRouter.post('/add_payment', PaymentsController.add)

userRouter.get('/accounts', UserAccountsController.get)
userRouter.post('/add_account', UserAccountsController.add)
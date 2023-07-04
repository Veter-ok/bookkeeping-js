import { Router} from 'express'
import Accounts from './controllers/accounts.js'
import Banks from './banksController.js'
import Cards from './controllers/cards.js'
import { checkPermission, verifyToken } from './verifyToken.js'
import { userRouter } from './router/User.js'
import { authRouter } from './router/Auth.js'
import { adminRouter } from './router/Admin.js'

export const router = Router()

router.use('/auth', authRouter)
router.use('/user/:id', verifyToken, userRouter)
router.use('/admin', checkPermission, adminRouter)

router.get('/accounts', Accounts.accounts)
router.get('/banks', Banks.allbanks)
router.get('/cards', Cards.get_cards)
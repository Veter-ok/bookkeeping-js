import { Router} from 'express'
import Accounts from './controllers/accounts.js'
import Banks from './controllers/banks.js'
import Cards from './controllers/cards.js'
import { checkPermission, verifyToken } from './verifyToken.js'
import { userRouter } from './router/User.js'
import { authRouter } from './router/Auth.js'
import { adminRouter } from './router/Admin.js'

export const router = Router()

router.use('/auth', authRouter)
router.use('/user', verifyToken, userRouter)
router.use('/admin', checkPermission, adminRouter)

router.get('/accounts', Accounts.get_accounts)
router.get('/banks', Banks.get_banks)
router.get('/cards', Cards.get_cards)
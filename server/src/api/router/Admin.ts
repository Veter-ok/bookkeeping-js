import { Router} from 'express'
import AdminUser from '../controllers/adminUser.js'
import AdminBanks from '../controllers/AdminBanks.js'
import accounts from '../controllers/accounts.js'
import cards from '../controllers/cards.js'

export const adminRouter = Router()

adminRouter.get('/users', AdminUser.get_all_user)
adminRouter.delete('/delete_user/:user_id', AdminUser.delete_user)
adminRouter.post('/add_user', AdminUser.add_user)
adminRouter.post('/add_bank', AdminBanks.add_bank)
adminRouter.delete('/delete_bank/:bank_id', AdminBanks.delete_bank)
adminRouter.post('/add_account', accounts.add_account)
adminRouter.post('/add_card', cards.add_card)
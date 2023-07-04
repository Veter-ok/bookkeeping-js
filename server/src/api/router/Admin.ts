import { Router} from 'express'
import AdminUser from '../controllers/adminUser.js'
import AdminBanks from '../controllers/AdminBanks.js'
import accounts from '../controllers/accounts.js'
import cards from '../controllers/cards.js'

export const adminRouter = Router()

adminRouter.get('/admin/users', AdminUser.get_all_user)
adminRouter.delete('/admin/delete_user/:user_id', AdminUser.delete_user)
adminRouter.post('/admin/add_user', AdminUser.add_user)
adminRouter.post('/admin/add_bank', AdminBanks.add_bank)
adminRouter.delete('/admin/delete_bank/:bank_id', AdminBanks.delete_bank)
adminRouter.post('/admin/add_account', accounts.add_account)
adminRouter.post('/admin/add_card', cards.add_card)
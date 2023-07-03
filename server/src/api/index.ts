import User from './auth.js'
import { Router} from 'express'
import Accounts from './accountsController.js'
import userCardsController from './userCardsController.js'
import PaymentsController from './paymentsRouter.js'
import Banks from './banksController.js'
import cardsController from './cardsController.js'
import AdminUserController from './AdminUserController.js'
import AdminBanksController from './AdminBanksController.js'
import accountsController from './accountsController.js'

export const router = Router()

// Auth
router.post('/auth/login', User.login)
router.post('/auth/registration', User.singUp)

// Get all data
router.get('/accounts', Accounts.accounts)
router.get('/banks', Banks.allbanks)
router.get('/cards', cardsController.get_cards)
router.get('/payments/get/:id', PaymentsController.get_payment)

// Admin User
router.get('/admin/:admin_token/user', AdminUserController.get_all_user)
router.delete('/admin/:admin_token/delete_user/:user_id', AdminUserController.delete_user)
router.post('/admin/add_user', AdminUserController.add_user)

router.post('/admin/add_bank', AdminBanksController.add_bank)
router.delete('/admin/delete_bank/:admin_token/:bank_id', AdminBanksController.delete_bank)

router.post('/admin/add_account', accountsController.add_account)

router.post('/admin/add_card', cardsController.add_card)
import User from './auth.js'
import { Router} from 'express'
import AllData from './data.js'
import Cards from './cardsRouter.js'
import PaymentsController from './paymentsRouter.js'
import Banks from './banksController.js'

export const router = Router()

router.post('/auth/login', User.login)
router.post('/auth/registration', User.singUp)

router.get('/data/accounts', AllData.accounts)
router.get('/banks', Banks.allbanks)
router.get('/data/cards', Cards.cards)
router.get('/payments/get/:id', PaymentsController.get_payment)
//router.get('/cards/img/:id', Cards.cards_img)
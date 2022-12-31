import {login, singUp} from './auth.js'
import { Router} from 'express'
import { accounts, banks_name, cards } from './data.js'

export const router = Router()

router.post('/auth/login', login)
router.post('/auth/registration', singUp)

router.get('/data/accounts', accounts)
router.get('/data/banks-name', banks_name)
router.get('/data/cards', cards)
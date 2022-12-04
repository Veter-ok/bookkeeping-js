import {login} from './auth.js'
import { Router} from 'express'

export const router = Router()

router.get('/auth/login', login)

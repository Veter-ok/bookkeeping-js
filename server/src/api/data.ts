import {Request, Response} from 'express'
import { ACCOUNTS, BanksAccount } from '../utils/constants/accounts.js'
import { BANKS } from '../utils/constants/Banks.js'

class AllData {
	async accounts(req:Request, res:Response<Array<BanksAccount>>) {
		res.send(ACCOUNTS)
	}
}

export default new AllData()
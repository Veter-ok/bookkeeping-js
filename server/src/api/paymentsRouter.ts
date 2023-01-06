import { Request, Response } from "express";
import { User1 } from "../utils/constants/user.js";

class PaymentsController {
	async get_payment(req: Request, res: Response){
		res.send(User1.history[req.params.id])
	}
}

export default new PaymentsController()
import type { Request, Response } from 'express'

export default class UserController {
	constructor() {}

	login = async (req: Request, res: Response) => {
		res.json({ status: 200, success: true, message: 'Login success' })
	}
}

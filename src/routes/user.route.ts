import { Router } from 'express'
import UserController from '../controllers/user.controller'

class UserRouter {
	router = Router()
	userController = new UserController()

	constructor() {
		this.initializeRoutes()
	}

	initializeRoutes() {
		this.router.route('/login').post(this.userController.login)
	}
}

export default new UserRouter().router

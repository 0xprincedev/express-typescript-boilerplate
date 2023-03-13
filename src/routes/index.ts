import { Router } from 'express'
import userRoute from './user.route'

class Routes {
	router = Router()

	constructor() {
		this.initializeRoutes()
	}

	initializeRoutes() {
		this.router.use('/user', userRoute)
	}
}

export default new Routes().router

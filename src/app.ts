import * as express from 'express'
import * as bodyParser from 'body-parser'
import * as cors from 'cors'
import * as dotenv from 'dotenv'

import routes from './routes'

dotenv.config()

const app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(cors())
app.use('/api', routes)

app.get('/api/test', (_, res) => {
	res.json({ status: 200, success: true, message: 'Game backend' })
})

const PORT = process.env.PORT || 7000

app.listen(PORT, () => {
	console.info(`Server is running on port: ${PORT}`)
})

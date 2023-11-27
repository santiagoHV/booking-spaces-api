const express = require('express')
const cors = require('cors')
const routerApi = require('./src/infrastructure/express/routes')
const { boomErrorHandler } = require('./src/application/middlewares/errorHandler')

const createApp = () => {
    const app = express()

    app.use(express.json())

    app.use(cors())

    app.get('/', (req, res) => {
        res.send('Hello World!')
    })

    routerApi(app)

    app.use(boomErrorHandler)

    return app
}

module.exports = createApp
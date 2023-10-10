const express = require('express')
const cors = require('cors')
const routerApi = require('./src/infrastructure/express/routes')
const e = require('express')

const createApp = () => {
    const app = express()

    app.use(express.json())

    app.use(cors())

    app.get('/', (req, res) => {
        res.send('Hello World!')
    })

    routerApi(app)

    return app
}

module.exports = createApp
const express = require('express')
const cors = require('cors')
const app = express()
const bodyParser = require('body-parser')
const e = require('express')

const createApp = () => {
    const app = express()

    app.use(express.json())

    app.use(cors())

    app.get('/', (req, res) => {
        res.send('Hello World!')
    })

    return app
}

module.exports = createApp
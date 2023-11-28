const express = require('express')
const cors = require('cors')
const routerApi = require('./src/infrastructure/express/routes')
const { boomErrorHandler } = require('./src/application/middlewares/errorHandler')
const sequelize = require('./src/infrastructure/database/sequelize/connection')

async function assertDatabaseConnectionOk() {
    console.log(`Checking database connection...`);
    try {
        await sequelize.authenticate()
        console.log('Database connection OK!')
    } catch (error) {
        console.log('Unable to connect to the database:')
        console.log(error.message);
        process.exit(1);
    }
}

const createApp = () => {
    const app = express()

    assertDatabaseConnectionOk()

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
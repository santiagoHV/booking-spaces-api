const express = require('express')
const userRouter = require('./user.routes')
const resourceRouter = require('./resource.routes')
const bookingRouter = require('./booking.routes')

const routerApi = (app) => {
    const router = express.Router()
    app.use('/api/v1', router)

    router.use('/users', userRouter)
    router.use('/resources', resourceRouter)
    router.use('/bookings', bookingRouter)
}

module.exports = routerApi
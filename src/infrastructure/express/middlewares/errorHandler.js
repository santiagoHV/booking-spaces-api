const boomErrorHandler = (err, req, res, next) => {
    if (err.isServer) {
        console.error(err)
    }
    if (err.isBoom) {
        const { statusCode, payload } = err.output
        res.status(statusCode).json(payload)
    }
    next(err)
}

module.exports = {boomErrorHandler}
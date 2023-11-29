const jwt = require('jsonwebtoken')
const boom = require('@hapi/boom')

const { jwtSecret } = require('../../config/config')

const verifyToken = (req, res, next) => {
    const token = req.headers['authorization']
    if (!token) {
        const apiToken = req.headers['apitoken']
        if (!apiToken) {
            throw boom.unauthorized('Token not provided')
        }else{
            if(apiToken != "s3cr3t"){
                throw boom.unauthorized('Invalid token')
            }else{
                console.log("api token")
                req.user = {id: 0}
                next()
            }
        }
    }else{
        try {
            const decoded = jwt.verify(token, jwtSecret)
            req.user = decoded
            
            next()
        } catch (error) {
            throw boom.unauthorized('Invalid token')
        }
    }
}

module.exports = { verifyToken }
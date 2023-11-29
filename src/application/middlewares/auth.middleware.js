const jwt = require('jsonwebtoken')

const { jwtSecret } = require('../../config/config')

const verifyToken = (req, res, next) => {
    const token = req.headers['authorization']
    if (!token) {
        return res.status(403).json({ message: 'Token not found' })
    }
    try {
        const decoded = jwt.verify(token, jwtSecret)
        req.user = decoded
        console.log(req.user)
        next()
    } catch (error) {
        return res.status(401).json({ message: 'Unauthorized' })
    }
}

module.exports = { verifyToken }
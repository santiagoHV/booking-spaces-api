const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const { jwtSecret } = require('../../config/config')


class AuthService {
    constructor(userRepository) {
        this.userRepository = userRepository
    }

    async register(user) {
        const hashedPassword = await bcrypt.hash(user.password, 10)
        const createdUser = await this.userRepository.create({...user, password: hashedPassword })
        return { createdUser, token: await this.generateToken(createdUser) }
    }

    async login(email, password) {
        const user = await this.userRepository.findByEmail(email)
        if (!user) {
            throw new Error('User not found')
        }
        const isPasswordValid = await bcrypt.compare(password, user.password)
        if (!isPasswordValid) {
            throw new Error('Password invalid')
        }

        return { user, token: await this.generateToken(user) }
    }

    async generateToken(user) {
        const payload = {
            id: user.id,
            email: user.email,
            name: user.name
        }

        const token = jwt.sign(payload, jwtSecret, { expiresIn: '1d' })
        return token
    }
}

module.exports = AuthService
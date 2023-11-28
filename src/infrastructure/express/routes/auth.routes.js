const express = require('express')

// const MockUserRepository = require('../../../infrastructure/database/mock/user.repository.mock')
const UserRepository = require('../../../infrastructure/database/sequelize/repositories/user.repository')
const AuthService = require('../../../application/services/auth.service')
const AuthController = require('../../../application/controllers/auth.controller')

const router = express.Router()
// const userRepository = new MockUserRepository()
const userRepository = new UserRepository()
const authService = new AuthService(userRepository)
const authController = new AuthController(authService)

router.post('/register', authController.register)
router.post('/login', authController.login)

module.exports = router
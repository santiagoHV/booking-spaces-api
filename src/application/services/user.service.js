const User = require('../../domain/entities/user.entity')

class UserService {
    constructor(userRepository) {
        this.userRepository = userRepository
    }

    async createUser(userData) {
        try {
            const user = new User(userData)
            return await this.userRepository.create(user)
        } catch (error) {
            throw error
        }
    }

    async getUserById(userId) {
        try {
            return await this.userRepository.findById(userId)
        } catch (error) {
            throw error
        }
    }
}

module.exports = UserService

const User = require('../../../../domain/entities/user.entity')
const { UserModel } = require('../models/user.model')

class UserRepository {
    constructor() {}

    async create(user) {
        const newUser = await UserModel.create(user)
        return new User(newUser)
    }

    async findById(id) {
        const user = await UserModel.findByPk(id)
        return new User(user)
    }

    async findByEmail(email) {
        const user = await UserModel.findOne({
            where: {
                email: email
            }
        })
        return new User(user)
    }
}
module.exports = UserRepository
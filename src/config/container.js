const { createContainer, asValue, asClass } = require('awilix')
const UserRepositoryMock = require('../database/mock/user.repository.mock')

const container = createContainer()

container.register({
    userRepository: process.env.NODE_ENV === 'test' ? asClass(UserRepositoryMock) : asValue(null)
})

module.exports = container
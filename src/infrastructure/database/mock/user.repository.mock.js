const User = require('../../../domain/entities/user.entity')

class UserRepositoryMock {
    constructor() {
        this.users = [
            new User({
                id: 1,
                name: 'John Doe',
                email: 'jhon@doe.com',
                password: '123456',
            }),
        ]
        this.nextId = 2
    }

    async create(user){
        const newUser = { ...user, id: this.nextId++ }
        this.users.push(newUser)
        return newUser
    }

    async findById(id){
        const intId = parseInt(id)
        return this.users.find(user => user.id === intId)
    }
}

module.exports = UserRepositoryMock
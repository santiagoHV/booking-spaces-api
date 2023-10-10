class UserRepositoryMock {
    constructor() {
        this.users = []
        this.nextId = 1
    }

    async create(user){
        const newUser = { ...user, id: this.nextId++ }
        this.users.push(newUser)
        return newUser
    }

    async findById(id){
        return this.users.find(user => user.id === id)
    }
}

module.exports = UserRepositoryMock
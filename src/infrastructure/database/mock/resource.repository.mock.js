const Resource = require('../../../domain/entities/resource.entity');

class ResourceRepositoryMock {
    constructor() {
        this.resources = []
        this.nextId = 1
    }

    async getAll() {
        return this.resources
    }

    async get(id) {
        return this.resources.find(resource => resource.id === id)
    }

    async create(resource) {
        const newResource = new Resource({...resource, id: `${this.nextId++}` })
        this.resources.push(newResource)

        return newResource
    }

    async update(id, resource) {
        const intId = parseInt(id)
        const index = this.resources.findIndex(resource => resource.id === intId)
        this.resources[index] = {...resource, id: intId }
        return this.resources[index]
    }

    async delete(id) {
        const intId = parseInt(id)
        const index = this.resources.findIndex(resource => resource.id === intId)
        this.resources.splice(index, 1)
        return true
    }
}

module.exports = ResourceRepositoryMock;
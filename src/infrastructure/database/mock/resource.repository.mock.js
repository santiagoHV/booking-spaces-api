const Resource = require('../../../domain/entities/resource.entity');

class ResourceRepositoryMock {
    constructor() {
        this.resources = [
            new Resource({
                id: 1,
                name: 'Resource 1',
                description: 'Resource 1 description',
                type: 'Resource 1 type',
                stock: 1,
                details: 'Resource 1 details',
            }),
        ]
        this.nextId = 2
    }

    async getAll() {
        return this.resources
    }

    async get(id) {
        const intId = parseInt(id)
        return this.resources.find(resource => resource.id === intId)
    }

    async create(resource) {
        const newResource = {...resource, id: this.nextId++ }
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
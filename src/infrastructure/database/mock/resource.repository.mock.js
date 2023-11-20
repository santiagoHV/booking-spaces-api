const Resource = require('../../../domain/entities/resource.entity');
const AvailabilityRepositoryMock = require('./availability.repository.mock');

class ResourceRepositoryMock {
    constructor() {
        this.resources = [
            new Resource({ 
                id: '1',
                name: 'Recurso 1', 
                description: 'Descripcion 1',
                type: 'Space',
                stock: 1,
                details: 'Tiene video beam'
            }),
        ]
        this.nextId = 2

        this.availabilityRepositoryMock = new AvailabilityRepositoryMock();
    }

    async getAll() {
        return this.resources
    }

    async get(id) {
        const resource = this.resources.find(resource => resource.id === id)

        if (!resource) {
            return null
        }
        const availabilities = await this.availabilityRepositoryMock.getAllByResourceId(id);

        return {
            ...resource,
            availabilities
        }
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
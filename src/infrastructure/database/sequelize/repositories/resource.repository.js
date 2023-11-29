const Resource = require('../../../../domain/entities/resource.entity')
const { ResourceModel } = require('../models/resource.model')
const { AvailabilityModel } = require('../models/availability.model')

class ResourceRepository {
    constructor() {}

    async getAll() {
        const resources = await ResourceModel.findAll()
        return resources.map(resource => new Resource(resource))
    }

    async get(id) {
        const resource = await ResourceModel.findByPk(id, {
            include: [{
                model: AvailabilityModel,
                as: 'availabilities'
            }]
        })

        if (!resource) {
            return null
        }

        return {
            resource: new Resource(resource),
            availabilities: resource.availabilities.map(availability => availability.toJSON())
        }
    }

    async create(resource) {
        const newResource = await ResourceModel.create(resource)
        return new Resource(newResource)
    }

    async update(id, resource) {
        const updatedResource = await ResourceModel.update(resource, {
            where: {
                id: id
            },
            returning: true
        })
        return new Resource(updatedResource[1][0])
    }

    async delete(id) {
        const resource = await ResourceModel.findByPk(id)
        await resource.destroy()
    }
}

module.exports = ResourceRepository
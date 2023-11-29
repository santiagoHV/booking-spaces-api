const { parse } = require('dotenv')
const boom = require('@hapi/boom')
const Availability = require('../../../../domain/entities/availability.entity')
const { AvailabilityModel } = require('../models/availability.model')

class AvailabilityRepository {
    constructor() {}

    async create(availability) {
        availability.resourceId = parseInt(availability.resourceId)
        const newAvailability = await AvailabilityModel.create(availability)
        return new Availability(newAvailability)
    }

    async getAllByResourceId(resourceId) {
        const availabilities = await AvailabilityModel.findAll({
            where: {
                resourceId: resourceId
            }
        })
        return availabilities.map(availability => new Availability(availability))
    }

    async findById(id) {
        const availability = await AvailabilityModel.findByPk(id)
        return new Availability(availability)
    }

    async update(id, availability) {
        const updatedAvailability = await AvailabilityModel.update(availability, {
            where: {
                id: id
            },
            returning: true
        })
        return new Availability(updatedAvailability[1][0])
    }

    async delete(id) {
        const availability = await AvailabilityModel.findByPk(id)
        await availability.destroy()
    }

    async findByResourceIdAndDay(resourceId, day) {
        console.log("day",day)
        const availabilities = await AvailabilityModel.findAll({
            where: {
                resourceId: resourceId,
                day: day
            }
        })
        return availabilities.map(availability => new Availability(availability))
    }
}

module.exports = AvailabilityRepository
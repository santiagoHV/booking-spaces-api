const Availability = require('../../../domain/entities/availability.entity');

class AvailabilityRepositoryMock {
    constructor() {
        this.availabilities = [
            new Availability({
                id: 1,
                startTime: '10:00',
                endTime: '12:00',
                day: 0,
                resourceId: 1,
            }),
            new Availability({
                id: 2,
                startTime: '14:00',
                endTime: '16:00',
                day: 0,
                resourceId: 1,
            }),
            new Availability({
                id: 3,
                startTime: '10:00',
                endTime: '12:00',
                day: 2,
                resourceId: 1,
            }),
            new Availability({
                id: 4,
                startTime: '14:00',
                endTime: '16:00',
                day: 2,
                resourceId: 1,
            }),
        ]
        this.nextId = 5
    }

    async create(availability) {
        const newAvailability = {...availability, id: this.nextId++ }
        this.availabilities.push(newAvailability)
        return newAvailability
    }

    async getAllByResourceId(resourceId) {
        const intResourceId = parseInt(resourceId)
        return this.availabilities.filter(availability => availability.resourceId === intResourceId)
    }

    async findById(id) {
        const intId = parseInt(id)
        return this.availabilities.find(availability => availability.id === intId)
    }

    async update(id, availability) {
        const intId = parseInt(id)
        const index = this.availabilities.findIndex(availability => availability.id === intId)
        this.availabilities[index] = {...availability, id: intId }
        return this.availabilities[index]
    }

    async delete(id) {
        const intId = parseInt(id)
        const index = this.availabilities.findIndex(availability => availability.id === intId)
        this.availabilities.splice(index, 1)
        return true
    }

    async findByResourceIdAndDay(resourceId, day) {
        const intResourceId = parseInt(resourceId)
        return this.availabilities.filter(availability => {
            return availability.resourceId === intResourceId && availability.day === day
        })
    }
}

module.exports = AvailabilityRepositoryMock;
const Booking = require('../../../domain/entities/booking.entity')

class UserRepositoryMock {
    constructor() {
        this.bookings = [
            new Booking({
                id: 1,
                startTime: '10:00',
                endTime: '12:00',
                date: new Date('2025-01-06'),
                observations: 'Observations',
                status: 'confirmed',
                userId: 1,
                resourceId: 1,
            }),
        ]
        this.nextId = 2
    }

    async create(booking) {
        booking.id = this.nextId++
        this.bookings.push(booking)
        return booking
    }

    async findById(id) {
        const intId = parseInt(id)
        return this.bookings.find(booking => booking.id === intId)
    }

    async findByUserId(userId) {
        const intId = parseInt(userId)
        return this.bookings.filter(booking => booking.userId === intId)
    }

    findByResourceIdAndDate = async (resourceId, date) => {
        const intId = parseInt(resourceId)
        const dateToCompare = date
        return this.bookings.filter(booking => {
            return booking.resourceId === intId && booking.date.getUTCDate() === dateToCompare.getUTCDate()
        })
    }
}

module.exports = UserRepositoryMock
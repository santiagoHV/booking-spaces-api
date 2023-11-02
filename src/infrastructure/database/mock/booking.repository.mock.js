const Booking = require('../../../domain/entities/booking.entity')

class UserRepositoryMock {
    constructor() {
        this.bookings = [
            new Booking({
                id: 1,
                startTime: '2021-10-10T10:00:00.000Z',
                endTime: '2021-10-10T11:00:00.000Z',
                observations: 'Observations',
                status: 'pending',
                userId: 1,
            }),
        ]
        this.nextId = 2
    }

    async create(booking) {
        const newBooking = {...booking, id: this.nextId++ }
        this.bookings.push(newBooking)
        return newBooking
    }

    async findById(id) {
        const intId = parseInt(id)
        return this.bookings.find(booking => booking.id === intId)
    }

    async findByUserId(userId) {
        const intId = parseInt(userId)
        return this.bookings.filter(booking => booking.userId === intId)
    }
}

module.exports = UserRepositoryMock
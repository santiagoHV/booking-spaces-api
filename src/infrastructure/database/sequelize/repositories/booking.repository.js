const Booking = require('../../../../domain/entities/booking.entity')
const { BookingModel } = require('../models/booking.model')

class BookingRepository {
    constructor() {}

    async create(booking) {
        const newBooking = await BookingModel.create(booking)
        return new Booking(newBooking)
    }

    async findById(id) {
        const booking = await BookingModel.findByPk(id)
        return new Booking(booking)
    }

    async findByUserId(userId) {
        const bookings = await BookingModel.findAll({
            where: {
                userId: userId
            }
        })
        return bookings.map(booking => new Booking(booking))
    }

    async closeBooking(bookingId) {
        const booking = await BookingModel.findByPk(bookingId)
        booking.status = 'closed'
        await booking.save()
        return new Booking(booking)
    }

    async findByResourceIdAndDate(resourceId, date) {
        const bookings = await BookingModel.findAll({
            where: {
                resourceId: resourceId,
                date: date
            }
        })
        return bookings.map(booking => new Booking(booking))
    }
}

module.exports = BookingRepository
const Booking = require('../../domain/entities/booking.entity')

class BookingService {
    constructor(bookingRepository, userRepository = null) {
        this.bookingRepository = bookingRepository
        this.userRepository = userRepository
    }

    async createBooking(bookingData) {
        try {
            const isAvaliable = await this.isResourceAvaliable(
                bookingData.resourceId, 
                bookingData.date,
                bookingData.startTime, 
                bookingData.endTime)

            if (!isAvaliable) {
                throw new Error('Resource is not avaliable')
            }

            const booking = new Booking({
                ...bookingData,
                status: 'active'
            })
            return await this.bookingRepository.create(booking)
        } catch (error) {
            throw error
        }
    }

    async getBookingById(bookingId) {
        try {
            return await this.bookingRepository.findById(bookingId)
        } catch (error) {
            throw error
        }
    }

    async getBookingByUserId(userId) {
        try {
            return await this.bookingRepository.findByUserId(userId)
        } catch (error) {
            throw error
        }
    }

    isResourceAvaliable = async (resourceId, date, startTime, endTime) => {
        try {
            console.log(this.bookingRepository)
            const bookings = await this.bookingRepository.findByResourceIdAndDate(resourceId, date)
            const bookingsInTimeRange = bookings.filter(booking => {
                const bookingStartTime = new Date(booking.startTime)
                const bookingEndTime = new Date(booking.endTime)
                const startTimeInRange = bookingStartTime < startTime || bookingStartTime > endTime
                const endTimeInRange = bookingEndTime < startTime || bookingEndTime > endTime
                return startTimeInRange || endTimeInRange
            }) 
            return bookingsInTimeRange.length === 0
        } catch (error) {
            throw error
        }
    }
}

module.exports = BookingService
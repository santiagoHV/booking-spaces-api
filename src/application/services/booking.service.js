const Booking = require('../../domain/entities/booking.entity')

class BookingService {
    constructor(
        bookingRepository,
        userRepository,
        availabilityService
    ) {
        this.bookingRepository = bookingRepository
        this.userRepository = userRepository,
            this.availabilityService = availabilityService
    }

    createBooking = async(bookingData) => {
        try {
            const isAValidBlock = await this.availabilityService.isAValidBlock(
                bookingData.startTime,
                bookingData.endTime,
                bookingData.date.getDay(),
                bookingData.resourceId
            )

            if (!isAValidBlock) {
                throw new Error('Invalid block')
            }

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
                status: 'active',
                resourceId: parseInt(bookingData.resourceId),
                userId: parseInt(bookingData.userId),
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

    async closeBooking(bookingId) {
        try {
            return ''
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

    async getBookingByResourceIdAndDate(resourceId, date) {
        try {
            return await this.bookingRepository.findByResourceIdAndDate(resourceId, date)
        } catch (error) {
            throw error
        }
    }

    isResourceAvaliable = async(resourceId, date, startTime, endTime) => {
        try {
            const bookings = await this.bookingRepository.findByResourceIdAndDate(resourceId, date)

            return this.availabilityService.isBlockAvailableInDay({
                    startTime,
                    endTime
                },
                bookings
            )
        } catch (error) {
            throw error
        }
    }
}

module.exports = BookingService
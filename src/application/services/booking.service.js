const boom = require('@hapi/boom')

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
        console.log(bookingData)
        const isAValidBlock = await this.availabilityService.isAValidBlock(
            bookingData.startTime,
            bookingData.endTime,
            bookingData.date.getDay(),
            bookingData.resourceId
        )
        if (!isAValidBlock) {
            throw boom.badRequest('Invalid block')
        }
        console.log('isAValidBlock')
        const isAvaliable = await this.isResourceAvaliable(
            bookingData.resourceId,
            bookingData.date,
            bookingData.startTime,
            bookingData.endTime)

        if (!isAvaliable) {
            throw boom.badRequest('Resource not available')
        }
        console.log('isAvaliable')
        const booking = new Booking({
            ...bookingData,
            status: 'active',
            resourceId: parseInt(bookingData.resourceId),
            userId: parseInt(bookingData.userId),
        })

        return await this.bookingRepository.create(booking)
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
            return await this.bookingRepository.closeBooking(bookingId)
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
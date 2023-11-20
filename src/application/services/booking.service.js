class BookingService {
    constructor(userRepository) {
        this.userRepository = userRepository
    }

    async getAllBookings() {
        try {
            return ''
        } catch (error) {
            throw error
        }
    }

    async getAllOpenBookings() {
        try {
            return ''
        } catch (error) {
            throw error
        }
    }

    async getAllClosedBookings() {
        try {
            return ''
        } catch (error) {
            throw error
        }
    }

    async createBooking(bookingData) {
        try {
            const booking = new Booking(bookingData)
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

    async getClosedBookingsByUserId(userId) {
        try {
            return ''
        } catch (error) {
            throw error
        }
    }

    async getOpenBookingsByUserId(userId) {
        try {
            return ''
        } catch (error) {
            throw error
        }
    }
}
class BookingService {
    constructor(userRepository) {
        this.userRepository = userRepository
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

    async getBookingByUserId(userId) {
        try {
            return await this.bookingRepository.findByUserId(userId)
        } catch (error) {
            throw error
        }
    }
}
class BookingController {
    constructor(bookingService) {
        this.bookingService = bookingService
    }

    async createBooking(req, res) {
        try {
            const booking = await this.bookingService.createBooking(req.body)
            res.status(201).json(booking)
        } catch (error) {
            res.status(500).json(error)
        }
    }

    async getBookingById(req, res) {
        try {
            const booking = await this.bookingService.getBookingById(req.params.id)
            res.status(200).json(booking)
        } catch (error) {
            res.status(500).json(error)
        }
    }

    async getBookingByUserId(req, res) {
        try {
            const booking = await this.bookingService.getBookingByUserId(req.params.userId)
            res.status(200).json(booking)
        } catch (error) {
            res.status(500).json(error)
        }
    }
}

module.exports = BookingController
class BookingController {
    constructor(bookingService) {
        this.bookingService = bookingService
    }

    async getAllBookings(req, res) {
        try {
            const bookings = await this.bookingService.getAllBookings()
            res.status(200).json(bookings)
        } catch (error) {
            res.status(500).json(error)
        }
    }

    async getAllOpenBookings(req, res) {
        try {
            const bookings = await this.bookingService.getAllOpenBookings()
            res.status(200).json(bookings)
        } catch (error) {
            res.status(500).json(error)
        }
    }

    async getAllClosedBookings(req, res) {
        try {
            const bookings = await this.bookingService.getAllClosedBookings()
            res.status(200).json(bookings)
        } catch (error) {
            res.status(500).json(error)
        }
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

    async closeBooking(req, res) {
        try {
            const booking = await this.bookingService.closeBooking(req.params.id)
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

    async getClosedBookingsByUserId(req, res) {
        try {
            const booking = await this.bookingService.getClosedBookingsByUserId(req.params.userId)
            res.status(200).json(booking)
        } catch (error) {
            res.status(500).json(error)
        }
    }

    async getOpenBookingsByUserId(req, res) {
        try {
            const booking = await this.bookingService.getOpenBookingsByUserId(req.params.userId)
            res.status(200).json(booking)
        } catch (error) {
            res.status(500).json(error)
        }
    }
}

module.exports = BookingController
class BookingController {
    constructor(bookingService) {
        this.bookingService = bookingService
    }

    createBooking = async(req, res) => {
        try {
            const { startTime, endTime, date, observations, userId, resourceId } = req.body

            const booking = await this.bookingService.createBooking({
                startTime,
                endTime,
                date: new Date(date),
                observations,
                userId,
                resourceId
            })
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

    getBookingByResourceIdAndDate = async(req, res) => {
        try {
            const date = new Date(req.params.date)
            const id = req.params.resourceId
            const booking = await this.bookingService.getBookingByResourceIdAndDate(id, date)
            res.status(200).json(booking)
        } catch (error) {
            res.status(500).json(error)
        }
    }
}

module.exports = BookingController
const express = require('express');
const MockBookingRepository = require('../../../infrastructure/database/mock/booking.repository.mock');
const BookingService = require('../../../application/services/booking.service');
const BookingController = require('../../../application/controllers/booking.controller');

const router = express.Router();
const bookingRepository = new MockBookingRepository();
const bookingService = new BookingService(bookingRepository);
const bookingController = new BookingController(bookingService);

router.get('/', bookingController.getAllBookings);
router.get('/open', bookingController.getAllOpenBookings);
router.get('/closed', bookingController.getAllClosedBookings);
router.post('/', bookingController.createBooking);
router.get('/:id', bookingController.getBookingById);
router.post('/:id/close', bookingController.closeBooking);
router.get('/user/:userId', bookingController.getBookingByUserId);
router.get('closed-bookings/user/:userId', bookingController.getClosedBookingsByUserId);
router.get('open-bookings/user/:userId', bookingController.getOpenBookingsByUserId);

module.exports = router;
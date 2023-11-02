const express = require('express');
const MockBookingRepository = require('../../../infrastructure/database/mock/booking.repository.mock');
const BookingService = require('../../../application/services/booking.service');
const BookingController = require('../../../application/controllers/booking.controller');

const router = express.Router();
const bookingRepository = new MockBookingRepository();
const bookingService = new BookingService(bookingRepository);
const bookingController = new BookingController(bookingService);

router.post('/', bookingController.createBooking);
router.get('/:id', bookingController.getBookingById);
router.get('/user/:userId', bookingController.getBookingByUserId);

module.exports = router;
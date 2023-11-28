const express = require('express');
const MockBookingRepository = require('../../../infrastructure/database/mock/booking.repository.mock');
const MockUserRepository = require('../../../infrastructure/database/mock/user.repository.mock');
const MockResourceRepository = require('../../../infrastructure/database/mock/resource.repository.mock');
const MockAvailabilityRepository = require('../../../infrastructure/database/mock/availability.repository.mock');
const AvailabilityService = require('../../../application/services/availability.service');
const BookingService = require('../../../application/services/booking.service');
const BookingController = require('../../../application/controllers/booking.controller');
const { verifyToken } = require('../../../application/middlewares/auth.middleware');

const router = express.Router();
const bookingRepository = new MockBookingRepository();
const userRepository = new MockUserRepository();
const resourceRepository = new MockResourceRepository();
const availabilityRepository = new MockAvailabilityRepository();

const availabilityService = new AvailabilityService(
    availabilityRepository,
    bookingRepository,
    resourceRepository);
const bookingService = new BookingService(
    bookingRepository,
    userRepository,
    availabilityService);
const bookingController = new BookingController(bookingService);

// router.get('/', bookingController.getAllBookings);
// router.get('/open', bookingController.getAllOpenBookings);
// router.get('/closed', bookingController.getAllClosedBookings);
router.post('/', [verifyToken], bookingController.createBooking);
router.post('/close/:id', [verifyToken], bookingController.closeBooking);
router.get('/:id', bookingController.getBookingById);
router.get('/user/:userId', bookingController.getBookingByUserId);
router.get('/:resourceId/:date', bookingController.getBookingByResourceIdAndDate);
module.exports = router;
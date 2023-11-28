const express = require('express');
const router = express.Router();

const ResourceController = require('../../../application/controllers/resource.controller');
const ResourceService = require('../../../application/services/resource.service');
const AvailabilityService = require('../../../application/services/availability.service');
const MockResourceRepository = require('../../../infrastructure/database/mock/resource.repository.mock');
const MockAvailabilityRepository = require('../../../infrastructure/database/mock/availability.repository.mock');
const MockBookingRepository = require('../../../infrastructure/database/mock/booking.repository.mock')
const { verifyToken } = require('../../../application/middlewares/auth.middleware');

const resourceRepository = new MockResourceRepository();
const availabilityRepository = new MockAvailabilityRepository();
const bookingRepository = new MockBookingRepository();

const availabilityService = new AvailabilityService(availabilityRepository, bookingRepository, resourceRepository);
const resourceService = new ResourceService(resourceRepository, 
    availabilityRepository, 
    bookingRepository,
    availabilityService
    );
const resourceController = new ResourceController(resourceService);

router.get('/', resourceController.getResources)// tested //Get all resources
router.get('/:id', resourceController.getResource)// tested //Get resource by id
router.post('/', [verifyToken], resourceController.createResource)// tested //Create resource
router.put('/:id', [verifyToken], resourceController.updateResource)//tested //Update resource
router.delete('/:id', resourceController.deleteResource) //t //Delete resource
router.post('/:id/availability', [verifyToken], resourceController.createAvailability) //t //Create availability schedule
router.post('/:id/availability/bulk', resourceController.createAvailabilityBulk) //tested //Create availability schedule
router.put('/:id/availability/:availabilityId', resourceController.updateAvailability) //Update availability schedule
router.delete('/:id/availability/:availabilityId', resourceController.deleteAvailability) //Delete availability schedule
router.get('/:id/availabilityByDate/:date', resourceController.getAvailabilityByDate) //Get availability schedule by date
router.get('/:id/bookingsByDate/:date', resourceController.getBookingsByDate) //Get bookings by date

module.exports = router;
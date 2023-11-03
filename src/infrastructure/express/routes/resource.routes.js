const express = require('express');
const router = express.Router();

const ResourceController = require('../../../application/controllers/resource.controller');
const ResourceService = require('../../../application/services/resource.service');
const MockResourceRepository = require('../../../infrastructure/database/mock/resource.repository.mock');
const MockAvailabilityRepository = require('../../../infrastructure/database/mock/availability.repository.mock');

const resourceRepository = new MockResourceRepository();
const availabilityRepository = new MockAvailabilityRepository();
const resourceService = new ResourceService(resourceRepository, availabilityRepository);
const resourceController = new ResourceController(resourceService);

router.get('/', resourceController.getResources) //Get all resources
router.get('/:id', resourceController.getResource) //Get resource by id
router.post('/', resourceController.createResource) //Create resource
router.put('/:id', resourceController.updateResource) //Update resource
router.delete('/:id', resourceController.deleteResource) //Delete resource
router.get('/:id/availability', resourceController.getAvailability) //Get availability schedule
router.post('/:id/availability', resourceController.createAvailability) //Create availability schedule
router.post('/:id/availability/bulk', resourceController.createAvailabilityBulk) //Create availability schedule
router.put('/:id/availability/:availabilityId', resourceController.updateAvailability) //Update availability schedule
router.delete('/:id/availability/:availabilityId', resourceController.deleteAvailability) //Delete availability schedule

// router.get('/:id/availabilityByDate', resourceController.getAvailabilityByDate) //Get availability schedule by date

module.exports = router;
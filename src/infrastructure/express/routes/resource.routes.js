const express = require('express');
const router = express.Router();

const ResourceController = require('../../../application/controllers/resource.controller');
const ResourceService = require('../../../application/services/resource.service');
const MockResourceRepository = require('../../../infrastructure/database/mock/resource.repository.mock');

const resourceRepository = new MockResourceRepository();
const resourceService = new ResourceService(resourceRepository);
const resourceController = new ResourceController(resourceService);

router.get('/', resourceController.getResources)
router.get('/:id', resourceController.getResource)
router.post('/', resourceController.createResource)
router.put('/:id', resourceController.updateResource)
router.delete('/:id', resourceController.deleteResource)
router.get('/:id/avaliability', resourceController.getAvaliability)
router.post('/:id/avaliability', resourceController.createAvaliability)
router.put('/:id/avaliability/:avaliabilityId', resourceController.updateAvaliability)
router.delete('/:id/avaliability/:avaliabilityId', resourceController.deleteAvaliability)
const express = require('express');
const router = express.Router();
const UserController = require('../../../application/controllers/user.controller');
const UserService = require('../../../application/services/user.service');
const MockUserRepository = require('../../../infrastructure/database/mock/user.repository.mock');

const userRepository = new MockUserRepository();
const userService = new UserService(userRepository);
const userController = new UserController(userService);

router.post('/', userController.createUser);
router.get('/:id', userController.getUserById);

module.exports = router;
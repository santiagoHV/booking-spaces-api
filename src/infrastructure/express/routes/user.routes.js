const express = require('express');
const router = express.Router();
const userController = require('../../../application/controllers/user.controller');

router.post('/', userController.createUser);

module.exports = router;
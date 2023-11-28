'use strict';

const { USER_TABLE, userSchema } = require('../models/user.model');
const { AVAILABILITY_TABLE, availabilitySchema } = require('../models/availability.model');
const { BOOKING_TABLE, bookingSchema } = require('../models/booking.model');
const { RESOURCE_TABLE, resourceSchema } = require('../models/resource.model');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface) {
    await queryInterface.createTable(USER_TABLE, userSchema);
    await queryInterface.createTable(AVAILABILITY_TABLE, availabilitySchema);
    await queryInterface.createTable(BOOKING_TABLE, bookingSchema);
    await queryInterface.createTable(RESOURCE_TABLE, resourceSchema);
  },

  async down (queryInterface) {
    await queryInterface.dropTable(USER_TABLE);
    await queryInterface.dropTable(AVAILABILITY_TABLE);
    await queryInterface.dropTable(BOOKING_TABLE);
    await queryInterface.dropTable(RESOURCE_TABLE);
  }
};

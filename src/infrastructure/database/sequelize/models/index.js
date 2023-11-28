const { AvailabilityModel, availabilitySchema, AVAILABILITY_TABLE } = require('./availability.model')   
const { BookingModel, bookingSchema, BOOKING_TABLE } = require('./booking.model')
const { ResourceModel, resourceSchema, RESOURCE_TABLE } = require('./resource.model')
const { UserModel, userSchema, USER_TABLE } = require('./user.model')


const setupModels = (sequelize) => {
    console.log('Setting up models')
    UserModel.init(userSchema, UserModel.config(sequelize))
    ResourceModel.init(resourceSchema, ResourceModel.config(sequelize))
    AvailabilityModel.init(availabilitySchema, AvailabilityModel.config(sequelize))
    BookingModel.init(bookingSchema, BookingModel.config(sequelize))

    UserModel.associate(sequelize.models)
    ResourceModel.associate(sequelize.models)
    AvailabilityModel.associate(sequelize.models)
    BookingModel.associate(sequelize.models)
}

module.exports = setupModels
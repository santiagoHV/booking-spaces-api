const {DataTypes, Model} = require('sequelize')

const RESOURCE_TABLE = 'resources'

const resourceSchema = {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    name: {
        type: DataTypes.STRING,
    },
    description: {
        type: DataTypes.STRING,
    },
    type: {
        type: DataTypes.STRING,
        defaultValue: 'space',
    },
    stock: {
        type: DataTypes.INTEGER,
        defaultValue: 1,
    },
    status: {
        type: DataTypes.STRING,
        defaultValue: 'active',
    },
}

class ResourceModel extends Model {
    static associate(models) {
        this.hasMany(models.AvailabilityModel, {
            foreignKey: 'resourceId',
            as: 'availabilities',
        })

        this.hasMany(models.BookingModel, {
            foreignKey: 'resourceId',
            as: 'bookings',
        })
    }

    static config(sequelize) {
        return {
            sequelize,
            tableName: RESOURCE_TABLE,
            modelName: 'ResourceModel',
        }
    }
}

module.exports = {RESOURCE_TABLE, resourceSchema, ResourceModel}
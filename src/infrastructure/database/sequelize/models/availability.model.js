const { DataTypes, Model } = require('sequelize')

const AVAILABILITY_TABLE = 'availabilities'

const availabilitySchema = {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    startTime: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    endTime: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    day: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    resourceId: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
}

class AvailabilityModel extends Model {
    static associate(models) {
        this.belongsTo(models.ResourceModel, {
            foreignKey: 'resourceId',
            as: 'resource',
        })
    }

    static config(sequelize) {
        return {
            sequelize,
            tableName: AVAILABILITY_TABLE,
            modelName: 'AvailabilityModel',
            timestamps: false,
        }
    }
}

module.exports = { AVAILABILITY_TABLE, availabilitySchema, AvailabilityModel }
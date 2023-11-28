const { DataTypes, Model } = require('sequelize');

const BOOKING_TABLE = 'bookings';

const bookingSchema = {
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
    date: {
        type: DataTypes.DATE,
        allowNull: false,
    },
    observations: {
        type: DataTypes.STRING,
    },
    status: {
        type: DataTypes.STRING,
        defaultValue: 'pending',
    },
    userId: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    resourceID: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
};

class BookingModel extends Model {
    static associate(models) {
        this.belongsTo(models.UserModel, {
            foreignKey: 'userId',
            as: 'user',
        });

        this.belongsTo(models.ResourceModel, {
            foreignKey: 'resourceId',
            as: 'resource',
        });
    }

    static config(sequelize) {
        return {
            sequelize,
            tableName: BOOKING_TABLE,
            modelName: 'BookingModel',
        };
    }
}

module.exports = { BOOKING_TABLE, bookingSchema, BookingModel }
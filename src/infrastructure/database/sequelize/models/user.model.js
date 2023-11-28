const { DataTypes, Model } = require('sequelize');

const USER_TABLE = 'users';

const userSchema = {
    id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    email: {
        type: DataTypes.STRING,
        unique: true,
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    role: {
        type: DataTypes.STRING,
        defaultValue: 'user',
    },
};

class UserModel extends Model {
    static associate(models) {
        this.hasMany(models.AvailabilityModel, {
            foreignKey: 'userId',
            as: 'availabilities',
        });
    }

    static config(sequelize) {
        return {
            sequelize,
            tableName: USER_TABLE,
            modelName: 'UserModel',
        };
    }
}

module.exports = { USER_TABLE, userSchema, UserModel };
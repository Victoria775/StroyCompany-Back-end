'use strict'
const { Model } = require('sequelize')

module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.hasMany(models.Task, {
        foreignKey: 'userId',
      })
      this.hasMany(models.Message, {
        foreignKey: 'userId',
      })
      this.hasMany(models.Application, {
        foreignKey: 'userId',
      })
    }
  }
  User.init(
    {
      id: {
        allowNull: false,
        primaryKey: true,
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
      },

      login: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      password: {
        allowNull: false,
        type: DataTypes.STRING,
      },

      first_name: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      last_name: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      full_name: {
        allowNull: false,
        type: DataTypes.STRING,
      },

      role: DataTypes.STRING,

      time_month_work: DataTypes.INTEGER,
      time_month_medical: DataTypes.INTEGER,
      time_month_vacation: DataTypes.INTEGER,

      time_year_work: DataTypes.INTEGER,
      time_year_medical: DataTypes.INTEGER,
      time_year_vacation: DataTypes.INTEGER,

      start_vacation: DataTypes.INTEGER,
      end_vacation: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: 'User',
    }
  )
  return User
}

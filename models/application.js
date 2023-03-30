'use strict'
const { Model } = require('sequelize')

module.exports = (sequelize, DataTypes) => {
  class Application extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsTo(models.User, {
        foreignKey: 'userId',
      })
    }
  }
  Application.init(
    {
      id: {
        allowNull: false,
        primaryKey: true,
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
      },

      userId: {
        type: DataTypes.UUID,
        allowNull: false,
        // field: 'userId',
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

      category: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      date_start: DataTypes.INTEGER,
      date_end: DataTypes.INTEGER,
      
      type: DataTypes.STRING,
      comment: DataTypes.STRING,
      status: DataTypes.STRING,
      process: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: 'Application',
    }
  )
  return Application
}

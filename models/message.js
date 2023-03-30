'use strict'
const { Model } = require('sequelize')

module.exports = (sequelize, DataTypes) => {
  class Message extends Model {
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
  Message.init(
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
      },

      senderId: {
        type: DataTypes.UUID,
        allowNull: false,
      },
      sender_first_name: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      sender_last_name: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      sender_full_name: {
        allowNull: false,
        type: DataTypes.STRING,
      },

      text: DataTypes.TEXT,

      infoFile: DataTypes.TEXT,
      
    },
    {
      sequelize,
      modelName: 'Message',
    }
  )
  return Message
}

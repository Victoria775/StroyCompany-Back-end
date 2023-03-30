'use strict'
const { Model } = require('sequelize')

module.exports = (sequelize, DataTypes) => {
  class Task extends Model {
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
  Task.init(
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

      text: {
        allowNull: false,
        type: DataTypes.STRING,
      },
    },
    {
      sequelize,
      modelName: 'Task',
    }
  )
  return Task
}

// const { db } = require('../models')
// const { Model, DataTypes } = require('sequelize')
// const { User } = require('../models')

// class Task extends Model {
//   /**
//    * Helper method for defining associations.
//    * This method is not a part of Sequelize lifecycle.
//    * The `models/index` file will call this method automatically.
//    */
//   static associate(models) {
//     // define association here
//     // this.belongsTo(models.User)
//   }
// }

// Task.init(
//   {
//     id: {
//       allowNull: false,
//       primaryKey: true,
//       type: DataTypes.UUID,
//       defaultValue: DataTypes.UUIDV4,
//     },

//     userId: {
//       type: DataTypes.UUID,
//       allowNull: false,
//       references: {
//         model: 'Users',
//         key: 'id',
//       },
//     },

//     text: {
//       allowNull: false,
//       type: DataTypes.STRING,
//     },
//   },
//   {
//     sequelize: db.sequelize,
//     modelName: 'Task',
//   }
// )

// Task.belongsTo(User)

// module.exports = Task

const { sequelize } = require('./index')
const { Model, DataTypes, Sequelize } = require('sequelize')

class Task extends Model {
  static associate(models) {
    this.belongsTo(models.User)
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
      references: {
        model: 'Users',
        key: 'id',
      },
    },

    text: {
      allowNull: false,
      type: Sequelize.STRING,
    },
  },
  {
    sequelize,
    modelName: 'Task',
  }
)
module.exports = Task

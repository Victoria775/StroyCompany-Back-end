const { sequelize } = require('./index')
const { Model, DataTypes, Sequelize } = require('sequelize')

class User extends Model {
  static associate(models) {
    this.hasMany(models.Task)
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
      type: Sequelize.STRING,
    },

    password: {
      allowNull: false,
      type: Sequelize.STRING,
    },

    last_name: {
      allowNull: false,
      type: Sequelize.STRING,
    },
    first_name: {
      allowNull: false,
      type: Sequelize.STRING,
    },
    full_name: {
      allowNull: false,
      type: Sequelize.STRING,
    },

    role: {
      type: Sequelize.STRING,
    },

    time_month_work: {
      type: DataTypes.INTEGER,
    },
    time_month_medical: {
      type: DataTypes.INTEGER,
    },
    time_month_vacation: {
      type: DataTypes.INTEGER,
    },
    time_year_work: {
      type: DataTypes.INTEGER,
    },
    time_year_medical: {
      type: DataTypes.INTEGER,
    },
    time_year_vacation: {
      type: DataTypes.INTEGER,
    },
  },
  {
    sequelize,
    modelName: 'User',
  }
)
module.exports = User

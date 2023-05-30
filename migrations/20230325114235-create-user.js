'use strict'
const { DataTypes } = require('sequelize')

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Users', {
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

      first_name: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      last_name: {
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
      user_position: {
        type: Sequelize.STRING,
      },
      phone: {
        type: Sequelize.STRING,
      },
      mail: {
        type: Sequelize.STRING,
      },
      name_files: {
        type: Sequelize.TEXT,
      },

      time_month_work: {
        type: Sequelize.INTEGER,
      },
      time_month_medical: {
        type: Sequelize.INTEGER,
      },
      time_month_vacation: {
        type: Sequelize.INTEGER,
      },
      time_year_work: {
        type: Sequelize.INTEGER,
      },
      time_year_medical: {
        type: Sequelize.INTEGER,
      },
      time_year_vacation: {
        type: Sequelize.INTEGER,
      },

      start_vacation: {
        type: Sequelize.INTEGER,
      },
      end_vacation: {
        type: Sequelize.INTEGER,
      },

      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    })
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Users')
  },
}

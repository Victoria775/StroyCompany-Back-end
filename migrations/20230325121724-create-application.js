'use strict';
const { DataTypes } = require('sequelize')

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Applications', {
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
        onUpdate: 'cascade',
        onDelete: 'cascade',
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

      category: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      date_start: {
        type: Sequelize.INTEGER,
      },
      date_end: {
        type: Sequelize.INTEGER,
      },
      type: {
        type: Sequelize.STRING,
      },

      comment: {
        type: Sequelize.STRING,
      },
      status: {
        type: Sequelize.STRING,
      },
      process: {
        type: Sequelize.STRING,
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
    await queryInterface.dropTable('Applications')
  },
}

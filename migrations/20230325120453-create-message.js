'use strict';
const { DataTypes } = require('sequelize')

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Messages', {
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

      senderId: {
        type: DataTypes.UUID,
        allowNull: false,
      },
      sender_first_name: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      sender_last_name: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      sender_full_name: {
        allowNull: false,
        type: Sequelize.STRING,
      },

      text: {
        type: Sequelize.TEXT,
      },

      infoFile: {
        type: Sequelize.TEXT,
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
    await queryInterface.dropTable('Messages')
  },
}

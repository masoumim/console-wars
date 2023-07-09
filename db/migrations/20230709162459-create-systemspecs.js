'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('system_specs', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      cpu: {
        type: Sequelize.STRING,
        allowNull: true
      },
      ram: {
        type: Sequelize.STRING,
        allowNull: true
      },
      storage: {
        type: Sequelize.STRING,
        allowNull: true
      },
      media_type: {
        type: Sequelize.STRING,
        allowNull: true
      },
      max_res: {
        type: Sequelize.STRING,
        allowNull: true
      },
      system_id: {
        type: Sequelize.INTEGER,
        references: { model: { tableName: 'systems'}, key: 'id' },
        allowNull: false
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('system_specs');
  }
};
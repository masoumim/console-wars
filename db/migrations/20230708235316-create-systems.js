'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('systems', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false
      },
      release_year: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      discontinue_year: {
        type: Sequelize.INTEGER,
        allowNull: true
      },
      lifespan: {
        type: Sequelize.INTEGER,
        allowNull: true
      },
      game_titles: {
        type: Sequelize.INTEGER,
        allowNull: true
      },
      generation: {
        type: Sequelize.INTEGER,
        allowNull: true
      },
      units_sold: {
        type: Sequelize.INTEGER,
        allowNull: true
      },
      system_type: {
        type: Sequelize.STRING,
        allowNull: true
      },
      comments: {
        type: Sequelize.INTEGER,
        allowNull: true
      },
      successor: {
        type: Sequelize.STRING,
        allowNull: true
      },
      predecessor: {
        type: Sequelize.STRING,
        allowNull: true
      },
      total_votes: {
        type: Sequelize.INTEGER,
        allowNull: true
      },
      added_by_user: {
        type: Sequelize.INTEGER,
        references: { model: { tableName: 'app_users'}, key: 'id' },
        allowNull: true
      },
      manufacturer_id: {
        type: Sequelize.INTEGER,
        references: { model: { tableName: 'manufacturers'}, key: 'id' },
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
    await queryInterface.dropTable('systems');
  }
};
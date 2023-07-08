// Require in the dotenv module
// Will load environment variables contained in .env file
require('dotenv').config();
const { Sequelize, DataTypes, Model } = require('sequelize');
const sequelize = new Sequelize(process.env.DATABASE_URL,
  {
    dialect: 'postgres',
    dialectOptions: {
      bigNumberStrings: true, ssl: { rejectUnauthorized: false }
    }
  });

class Manufacturers extends Model { }

Manufacturers.init({
  // Model attributes are defined here
  name: { type: DataTypes.STRING, allowNull: false }
}, {
  // Other model options go here
  sequelize, // We need to pass the connection instance
  modelName: 'Manufacturers', // We need to choose the model name
  tableName: 'manufacturers'  // Specify the table name
});

module.exports = { Manufacturers };
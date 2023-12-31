// Require in the dotenv module
// Will load environment variables contained in .env file
require('dotenv').config();
const { Sequelize, DataTypes, Model } = require('sequelize');
const { AppUsers } = require('./appusers');
const { Systems } = require('./systems');
const sequelize = new Sequelize(process.env.DATABASE_URL,
  {
    dialect: 'postgres',
    dialectOptions: {
      bigNumberStrings: true, ssl: { rejectUnauthorized: false }
    }
  });

class Votes extends Model { }

Votes.init({
  // Model attributes are defined here
  user_id: { type: DataTypes.INTEGER, allowNull: false, references: { model: AppUsers, key: 'id' } },
  system_id: { type: DataTypes.INTEGER, allowNull: false, references: {model: Systems, key: 'id'} }

}, {
  // Other model options go here
  sequelize, // We need to pass the connection instance
  modelName: 'Votes', // We need to choose the model name
  tableName: 'votes'  // Specify the table name
});

module.exports = { Votes };
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

class Systemspecs extends Model { }

Systemspecs.init({
  // Model attributes are defined here
  cpu: {type: DataTypes.STRING, allowNull: true },
  ram: {type: DataTypes.STRING, allowNull: true },
  storage: {type: DataTypes.STRING, allowNull: true },
  media_type: {type: DataTypes.STRING, allowNull: true },
  max_res: {type: DataTypes.STRING, allowNull: true },
  system_id: {type: DataTypes.INTEGER, allowNull: false}
}, {
  // Other model options go here
  sequelize, // We need to pass the connection instance
  modelName: 'Systemspecs', // We need to choose the model name
  tableName: 'system_specs'  // Specify the table name
});

module.exports = { Systemspecs };
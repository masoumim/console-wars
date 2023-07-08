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

class AppUsers extends Model { }

AppUsers.init({
  // Model attributes are defined here
  name: { type: DataTypes.STRING, allowNull: false },
  password: { type: DataTypes.STRING, allowNull: false },
  email: {type: DataTypes.STRING}
}, {
  // Other model options go here
  sequelize, // We need to pass the connection instance
  modelName: 'AppUsers', // We need to choose the model name
  tableName: 'app_users'  // Specify the table name
});

module.exports = { AppUsers };
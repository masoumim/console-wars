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

class Comments extends Model { }

Comments.init({
  // Model attributes are defined here
  comment: { type: DataTypes.STRING, allowNull: false },
  user_id: {type: DataTypes.INTEGER, allowNull: false },
  system_id: {type: DataTypes.INTEGER, allowNull: false}

}, {
  // Other model options go here
  sequelize, // We need to pass the connection instance
  modelName: 'Comments', // We need to choose the model name
  tableName: 'comments'  // Specify the table name
});

module.exports = { Comments };
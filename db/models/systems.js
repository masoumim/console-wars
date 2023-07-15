// Require in the dotenv module
// Will load environment variables contained in .env file
require('dotenv').config();
const { Sequelize, DataTypes, Model, STRING } = require('sequelize');
const sequelize = new Sequelize(process.env.DATABASE_URL,
    {
        dialect: 'postgres',
        dialectOptions: {
            bigNumberStrings: true, ssl: { rejectUnauthorized: false }
        }
    });

class Systems extends Model { }

Systems.init({
    // Model attributes are defined here
    name: { type: DataTypes.STRING, allowNull: false },
    release_year: { type: DataTypes.INTEGER, allowNull: false },
    discontinue_year: { type: DataTypes.INTEGER, allowNull: true },
    game_titles: { type: DataTypes.INTEGER, allowNull: true },
    generation: { type: DataTypes.INTEGER, allowNull: true },
    units_sold: { type: DataTypes.INTEGER, allowNull: true },
    system_type: { type: DataTypes.STRING, allowNull: true },    
    successor: { type: DataTypes.STRING, allowNull: true },
    predecessor: { type: DataTypes.STRING, allowNull: true },    
    added_by_user: { type: DataTypes.INTEGER, allowNull: true },
    manufacturer_id: { type: DataTypes.INTEGER, allowNull: false }
}, {
    // Other model options go here
    sequelize, // We need to pass the connection instance
    modelName: 'Systems', // We need to choose the model name
    tableName: 'systems'  // Specify the table name
});

module.exports = { Systems };
// Require in the dotenv module
// Will load environment variables contained in .env file
// require('dotenv').config();

// Get the Systems model
const { Systems } = require("../db/models/systems.js");

// Get the Manufacturers model
const { Manufacturers } = require("../db/models/manufacturers.js");

// Get the system specs model
const { Systemspecs } = require('../db/models/systemspecs.js');

// Get the User model
const { AppUsers } = require('../db/models/appusers.js');

// GET ALL SYSTEMS
const getAllSystems = async () => {
    try {
        const getQuery = await Systems.findAll();
        return getQuery;
    } catch (err) {
        return err;
    }
}

// GET SYSTEM BY ID
const getSystem = async (id) => {
    try {
        const getQuery = await Systems.findAll({ where: { id: id } });                
        return getQuery;        
    } catch (err) {
        return err;
    }
}

// GET SYSTEM BY NAME
const getSystemByName = async (systemName) =>{
    try{
        const getQuery = await Systems.findAll({where: {name: systemName}});
        return getQuery;
    }catch(err){
        return err;
    }
}

// ADD SYSTEM TO DB
const addSystem = async (name, releaseYear, discontinueYear, gameTitles, generation, unitsSold, systemType, comments, successor, predecessor, totalVotes, addedByUser, manufacturerId) => {
    try {
        const insertQuery = await Systems.create({ name: name, release_year: releaseYear, discontinue_year: discontinueYear, game_titles: gameTitles, generation: generation, units_sold: unitsSold, system_type: systemType, comments: comments, successor: successor, predecessor: predecessor, total_votes: totalVotes, added_by_user: addedByUser, manufacturer_id: manufacturerId });
        return insertQuery;
    } catch (err) {
        return err;
    }
}

// GET MANUFACTURER BY ID
const getManufacturerByID = async (id) => {
    try {
        const getQuery = await Manufacturers.findAll({ where: { id: id } });                
        return getQuery;        
    } catch (err) {
        return err;
    }
}

// ADD MANUFACTURER TO DB
const addManufacturer = async (name) => {
    try {
        const insertQuery = await Manufacturers.create({ name: name });
        return insertQuery;
    } catch (err) {
        return err;
    }
}

// GET SYSTEM SPECS BY SYSTEM ID
const getSystemSpecsBySystemID = async (id) => {
    try {
        const getQuery = await Systemspecs.findAll({ where: { system_id: id } });                
        return getQuery;        
    } catch (err) {
        return err;
    }
}

// ADD SYSTEM SPECS TO DB
const addSystemspecs = async (cpu, ram, storage, mediaType, maxRes, systemID) => {
    try {
        const insertQuery = await Systemspecs.create({ cpu: cpu, ram: ram, storage: storage, media_type: mediaType, max_res: maxRes, system_id: systemID });
        return insertQuery;
    } catch (err) {
        return err;
    }
}

// GET ALL USERS
const getAllUsers = async () => {
    try {
        const getQuery = await AppUsers.findAll();
        return getQuery;
    } catch (err) {
        return err;
    }
}

// ADD USER TO DB
const addUser = async (name, password, email) => {
    try {
        const insertQuery = await AppUsers.create({ name: name, password: password, email: email });
        return insertQuery;
    } catch (err) {
        return err;
    }
}

// GET USER BY NAME
const getUserByName = async (name) => {
    try {
        const getQuery = await AppUsers.findAll({ where: { name: name } });
        return getQuery;
    } catch (err) {
        return err;
    }
}

// GET USER BY ID
const getUserByID = async (id) => {
    try {
        const getQuery = await AppUsers.findAll({ where: { id: id } });
        return getQuery;
    } catch (err) {
        return err;
    }
}
    
module.exports = {
    getAllSystems,
    getSystem,
    getSystemByName,
    addSystem,
    addManufacturer,
    getManufacturerByID,
    getSystemSpecsBySystemID,
    addSystemspecs,
    getAllUsers,
    addUser,
    getUserByName,
    getUserByID
}
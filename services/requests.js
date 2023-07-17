// Require in the dotenv module
// Will load environment variables contained in .env file
require('dotenv').config();

// Get the Systems model
const { Systems } = require("../db/models/systems.js");

// Get the Manufacturers model
const { Manufacturers } = require("../db/models/manufacturers.js");

// Get the system specs model
const { Systemspecs } = require('../db/models/systemspecs.js');

// Get the User model
const { AppUsers } = require('../db/models/appusers.js');

// Get the comment model
const { Comments } = require('../db/models/comments.js');

// Get the votes model
const { Votes } = require('../db/models/votes.js');

const { Sequelize, QueryTypes } = require('sequelize');

const sequelize = new Sequelize({
    database: process.env.DATABASE_NAME,
    username: process.env.DATABASE_USERNAME,
    password: process.env.DATABASE_PASSWORD,
    host: process.env.DATABASE_HOST,
    port: process.env.DATABASE_PORT,
    dialect: "postgres",
    dialectOptions: {
      ssl: {
        // require: true, // This will help you. But you will see nwe error
        rejectUnauthorized: false // This line will fix new error
      }
    },
  });

// GET ALL SYSTEMS INCLUDING NUM OF VOTES AND NUM OF COMMENTS
const getAllSystems = async () => {
    try {
        const [results, metadata] = await sequelize.query("SELECT systems.id, systems.name, systems.release_year, systems.discontinue_year, systems.game_titles, systems.generation, systems.units_sold, systems.system_type, systems.successor, systems.predecessor, COUNT(votes.id) as votes, COUNT(comments.id) as comments FROM systems LEFT JOIN votes ON systems.id = votes.system_id LEFT JOIN comments ON comments.system_id = systems.id GROUP BY(systems.id)");
        return results;
    } catch (err) {
        return err;
    }
}

// GETS USERS AND COMMENTS FOR A SYSTEM
const getUserComments = async (systemID) =>{
    try{
        const [results, metadata] = await sequelize.query(`SELECT comments.comment, app_users.name, app_users.email FROM comments JOIN app_users ON comments.user_id = app_users.id WHERE comments.system_id = ${systemID}`);
        return results;
    }catch(err){
        return err;
    }
}

// GETS USERS AND VOTES FOR A SYSTEM
const getUserVotes = async (systemID) =>{
    try{
        const [results, metadata] = await sequelize.query(`SELECT app_users.name, app_users.email FROM app_users JOIN votes ON app_users.id = votes.user_id WHERE votes.system_id = ${systemID}`);
        return results;
    }catch(err){
        return err;
    }
}

// GETS A SYSTEM + NUM VOTES + NUM COMMENTS
const getSystem = async (systemID) => {
    try {
        const [results, metadata] = await sequelize.query(`SELECT systems.id, systems.name, systems.release_year, systems.discontinue_year, systems.game_titles, systems.generation, systems.units_sold, systems.system_type, systems.successor, systems.predecessor, systems.manufacturer_id, COUNT(votes.id) as votes, COUNT(comments.id) as comments FROM systems LEFT JOIN votes ON systems.id = votes.system_id LEFT JOIN comments ON comments.system_id = systems.id WHERE systems.id = ${systemID} GROUP BY(systems.id)`);
        return results;
    } catch (err) {
        return err;
    }
}

// GET SYSTEM BY NAME
const getSystemByName = async (systemName) => {
    try {
        const getQuery = await Systems.findAll({ where: { name: systemName } });
        return getQuery;
    } catch (err) {
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

// ADD COMMENT
const addComment = async (comment, userID, systemID) => {
    try {
        const insertQuery = await Comments.create({ comment: comment, user_id: userID, system_id: systemID });
        return insertQuery;
    } catch (err) {
        return err;
    }
}

// GET ALL COMMENTS BY SYSTEM ID
const getCommentsBySystemID = async (systemID) => {
    try {
        const getQuery = await Comments.findAll({ where: { system_id: systemID } });
        return getQuery;
    } catch (err) {
        return err;
    }
}

// GET ALL COMMENTS BY USER ID
const getCommentsByUserID = async (userID) => {
    try {
        const getQuery = await Comments.findAll({ where: { user_id: userID } });
        return getQuery;
    } catch (err) {
        return err;
    }
}

// GET USER(S) FOR EACH COMMENT ID
const getUsersByCommentID = async (comments) => {
    try {
        let users = [];
        for (element in comments) {
            // Get the user by their id
            const getQuery = await getUserByID(comments[element].user_id);

            // We only want to add a user once, even if one user has multiple comments,
            // So we check if the user is in the array already
            const isFound = users.some(element => {
                return element.id === getQuery[0].dataValues.id;
            });

            // If user not found, add them to array
            if (!isFound) {
                // Add the user to the users array
                users.push(getQuery[0].dataValues);
            }
        }
        return users;
    } catch (err) {
        return err;
    }
}

// ADD VOTE FOR A SYSTEM
const addVoteForSystem = async (userID, systemID) => {
    try {
        const insertQuery = await Votes.create({ user_id: userID, system_id: systemID });
        return insertQuery;

    } catch (err) {

    }
}

// GET USER VOTE FOR A SYSTEM
const getUserVote = async (userID) => {
    try {
        const getQuery = await Votes.findAll({ where: { user_id: userID } });
        return getQuery;
    } catch (err) {
        return err;
    }
}

// GET ALL VOTES BY SYSTEM ID
const getVotesBySystemID = async (systemID) => {
    try {
        const getQuery = await Votes.findAll({ where: { system_id: systemID } });
        return getQuery;
    } catch (err) {
        return err;
    }
}

// GET USER(S) FOR EACH VOTE ID
const getUsersByVoteID = async (votes) => {
    try {
        let users = [];
        for (element in votes) {
            // Get the user by their id
            const getQuery = await getUserByID(votes[element].user_id);
            users.push(getQuery[0].dataValues);
        }
        return users;
    } catch (err) {
        return err;
    }
}

module.exports = {
    getAllSystems,
    getUserComments,
    getUserVotes,
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
    getUserByID,
    addComment,
    getCommentsBySystemID,
    getCommentsByUserID,
    getUsersByCommentID,
    addVoteForSystem,
    getUserVote,
    getVotesBySystemID,
    getUsersByVoteID
}
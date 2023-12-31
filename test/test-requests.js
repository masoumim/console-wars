/*
test-requests.js: This file contains a full suite of tests used to test the './services/requests.js' file's DB queries.
The test framework used is the 'mocha' test library and the 'chai' assertion library
To run tests type "npm test" in the terminal
The testing approach will use the following steps: Setup -> Exercise -> Verify -> Teardown
*/

// Require in the chai library
const { assert } = require('chai');

// Require in the requests module
const requests = require("../services/requests.js");

// Get the Systems model
const { Systems } = require("../db/models/systems.js");

// Get the manufacturers model
const { Manufacturers } = require('../db/models/manufacturers.js');

// Get the system specs model
const { Systemspecs } = require('../db/models/systemspecs.js');

// Get the AppUsers model
const { AppUsers } = require('../db/models/appusers.js');

// Get the comments model
const { Comments } = require('../db/models/comments.js');

// Get the votes model
const { Votes } = require('../db/models/votes.js');

describe('Requests', () => {
    describe('getAllSystems', () => {
        it('Will return an array of all systems including num of votes and num of comments', async () => {
            // Exercise:
            const response = await requests.getAllSystems();

            // Verify
            assert.isArray(response);
        });
    });
    describe('getSystem', () => {
        it('Will return an array representing a system and its data including num of votes and num of comments', async () => {
            // Setup:
            // Add dummy data row in manufacturers table because adding a row to the system table requires a valid manufacturer foreign key 
            await requests.addManufacturer("Test Manufacturer");
            const manufacturer = await Manufacturers.findAll({ where: { name: "Test Manufacturer" } });
            const manufacturer_id = manufacturer[0].dataValues.id;
            await requests.addSystem("Test System", 1972, 1975, 28, 1, 350000, "Console", 0, "Test System 2", null, 0, null, manufacturer_id);
            const system = await Systems.findAll({ where: { name: "Test System" } });
            const system_id = system[0].dataValues.id;

            // Exercise:
            const response = await requests.getSystem(system_id);

            // Verify
            assert.isArray(response);

            // Teardown
            // Delete systems dummy data
            await Systems.destroy({ where: { name: "Test System" } });
            // Delete manufacturers dummy data
            await Manufacturers.destroy({ where: { id: manufacturer_id } });
        });
    });
    describe('getSystemByName', () => {
        it('Will return an array representing a system and its data', async () => {
            // Setup:
            // Add dummy data row in manufacturers table because adding a row to the system table requires a valid manufacturer foreign key 
            await requests.addManufacturer("Test Manufacturer");
            const manufacturer = await Manufacturers.findAll({ where: { name: "Test Manufacturer" } });
            const manufacturer_id = manufacturer[0].dataValues.id;
            await requests.addSystem("Test System", 1972, 1975, 28, 1, 350000, "Console", 0, "Test System 2", null, 0, null, manufacturer_id);

            // Exercise:
            const response = await requests.getSystemByName("Test System");

            // Verify
            assert.isArray(response);

            // Teardown
            // Delete systems dummy data
            await Systems.destroy({ where: { name: "Test System" } });
            // Delete manufacturers dummy data
            await Manufacturers.destroy({ where: { id: manufacturer_id } });
        });
    });
    describe('addSystem', () => {
        it('Will add system and return an object if insert is successful', async () => {
            // Setup:
            // Add dummy data row in manufacturers table because adding a row to the systems table requires a valid manufacturer foreign key 
            await requests.addManufacturer("Test Manufacturer");
            const manufacturer = await Manufacturers.findAll({ where: { name: "Test Manufacturer" } });
            const id = manufacturer[0].dataValues.id;

            // Exercise:
            const result = await requests.addSystem("Test System", 1990, 1995, 120, 4, 100000, "Console", 10, "Successor System", "Predecessor System", 15, null, id);

            // Verify:
            assert.isObject(result);

            // Teardown:
            // Delete systems dummy data
            await Systems.destroy({ where: { name: "Test System" } });
            // Delete manufacturers dummy data
            await Manufacturers.destroy({ where: { id: id } });
        });
    });
    describe('getManufacturerByID', () => {
        it('Will return an array containing the manufactuerer of a specific system using the systems manufacturer ID', async () => {
            // Setup:
            // Add dummy data row in manufacturers table because adding a row to the system table requires a valid manufacturer foreign key 
            await requests.addManufacturer("Test Manufacturer");
            const manufacturer = await Manufacturers.findAll({ where: { name: "Test Manufacturer" } });
            const manufacturer_id = manufacturer[0].dataValues.id;
            await requests.addSystem("Test System", 1972, 1975, 28, 1, 350000, "Console", 0, "Test System 2", null, 0, null, manufacturer_id);
            const system = await Systems.findAll({ where: { name: "Test System" } });
            const system_manufacturer_id = system[0].dataValues.manufacturer_id;

            // Exercise:
            const result = await requests.getManufacturerByID(system_manufacturer_id);

            // Verify:
            assert.isArray(result);

            // Teardown:
            // Delete systems dummy data
            await Systems.destroy({ where: { name: "Test System" } });
            // Delete manufacturers dummy data
            await Manufacturers.destroy({ where: { id: manufacturer_id } });
        });
    });
    describe('addManufacturer', () => {
        it('Will add manufacturer and return an object if insert is successful', async () => {
            // Exercise:
            const result = await requests.addManufacturer("Test Manufacturer");

            // Verify:
            assert.isObject(result);

            // Teardown:
            await Manufacturers.destroy({ where: { name: "Test Manufacturer" } });
        });
    });
    describe('addSystemSpecs', () => {
        it('Will add system specs and return an object if insert is successful', async () => {
            // Setup:
            // Add dummy data row in systems table because adding a row to the system_specs table requires a valid system foreign key 
            await requests.addManufacturer("Test Manufacturer");
            const manufacturer = await Manufacturers.findAll({ where: { name: "Test Manufacturer" } });
            const manufacturer_id = manufacturer[0].dataValues.id;
            await requests.addSystem("Test System", 1972, 1975, 28, 1, 350000, "Console", 0, "Test System 2", null, 0, null, manufacturer_id);
            const system = await Systems.findAll({ where: { name: "Test System" } });
            const system_id = system[0].dataValues.id;

            // Exercise:
            const result = await requests.addSystemspecs("100 mhz", "10MB", "20GB", "CD", "240x480", system_id);

            // Verify:
            assert.isObject(result);

            // Teardown:
            // Delete systemspecs dummy data
            await Systemspecs.destroy({ where: { system_id: system_id } });
            // Delete systems dummy data
            await Systems.destroy({ where: { name: "Test System" } });
            // Delete manufacturer dummy data
            await Manufacturers.destroy({ where: { name: "Test Manufacturer" } });
        });
    });
    describe('getSystemSpecsBySystemID', () => {
        it('Will add system specs and return an object if insert is successful', async () => {
            // Setup:
            // Add dummy data row in systems table because adding a row to the system_specs table requires a valid system foreign key 
            await requests.addManufacturer("Test Manufacturer");
            const manufacturer = await Manufacturers.findAll({ where: { name: "Test Manufacturer" } });
            const manufacturer_id = manufacturer[0].dataValues.id;
            await requests.addSystem("Test System", 1972, 1975, 28, 1, 350000, "Console", 0, "Test System 2", null, 0, null, manufacturer_id);
            const system = await Systems.findAll({ where: { name: "Test System" } });
            const system_id = system[0].dataValues.id;
            await requests.addSystemspecs("100 mhz", "10MB", "20GB", "CD", "240x480", system_id);

            // Exercise:
            result = await requests.getSystemSpecsBySystemID(system_id);

            // Verify:
            assert.isArray(result);

            // Teardown:
            // Delete systemspecs dummy data
            await Systemspecs.destroy({ where: { system_id: system_id } });
            // Delete systems dummy data
            await Systems.destroy({ where: { name: "Test System" } });
            // Delete manufacturer dummy data
            await Manufacturers.destroy({ where: { name: "Test Manufacturer" } });
        });
    });
    describe('addUser', () => {
        it('Will add a user and return an object if insert is successful', async () => {
            // Exercise:
            const result = await requests.addUser("Foo", "Foo123@Bar.com", "Foo123");

            // Verify:
            assert.isObject(result);

            // Teardown:
            await AppUsers.destroy({ where: { name: "Foo" } });
        });
    });
    describe('getUserByName', () => {
        it('Will return an array containing the user', async () => {
            // Setup: Create a temporary user
            await requests.addUser("Foo", "Foo123@Bar.com", "Foo123");

            // Exercise:
            const result = await requests.getUserByName("Foo");

            // Verify:
            assert.isArray(result);

            // Teardown: delete the temporary user
            await AppUsers.destroy({ where: { name: "Foo" } });
        });
    });
    describe('getUserByID', () => {
        it('Will return an array containing the user', async () => {
            // Setup: Create a temporary user
            await requests.addUser("Foo", "Foo123@Bar.com", "Foo123");
            const user = await AppUsers.findAll({ where: { name: "Foo" } });
            const user_id = user[0].dataValues.id;

            // Exercise:
            const result = await requests.getUserByID(user_id);

            // Verify:
            assert.isArray(result);

            // Teardown: delete the temporary user
            await AppUsers.destroy({ where: { name: "Foo" } });
        });
    });
    describe('addComment', () => {
        it('Will add a comment and return an object if insert is successful', async () => {
            // Setup: Create a Manufacturer > System > User > Comment
            await requests.addManufacturer("Test Manufacturer");
            const manufacturer = await Manufacturers.findAll({ where: { name: "Test Manufacturer" } });
            const manufacturer_id = manufacturer[0].dataValues.id;
            await requests.addSystem("Test System", 1972, 1975, 28, 1, 350000, "Console", 0, "Test System 2", null, 0, null, manufacturer_id);
            const system = await Systems.findAll({ where: { name: "Test System" } });
            const system_id = system[0].dataValues.id;
            await requests.addUser("Foo", "Foo123@Bar.com", "Foo123");
            const user = await AppUsers.findAll({ where: { name: "Foo" } });
            const user_id = user[0].dataValues.id;

            // Exercise:
            const result = await requests.addComment("Hello World", user_id, system_id);

            // Verify:
            assert.isObject(result);

            // Teardown:
            // Delete Comment
            await Comments.destroy({ where: { comment: "Hello World" } });
            // Delete systems dummy data
            await Systems.destroy({ where: { name: "Test System" } });
            // Delete manufacturer dummy data
            await Manufacturers.destroy({ where: { name: "Test Manufacturer" } });
            // Delete user dummy data
            await AppUsers.destroy({ where: { name: "Foo" } });
        });
    });
    describe('addVoteForSystem', () => {
        it('Will add a vote for a system and return an object if insert is successful', async () => {
            // Setup: Create a Manufacturer > System > User
            await requests.addManufacturer("Test Manufacturer");
            const manufacturer = await Manufacturers.findAll({ where: { name: "Test Manufacturer" } });
            const manufacturer_id = manufacturer[0].dataValues.id;
            await requests.addSystem("Test System", 1972, 1975, 28, 1, 350000, "Console", 0, "Test System 2", null, 0, null, manufacturer_id);
            const system = await Systems.findAll({ where: { name: "Test System" } });
            const system_id = system[0].dataValues.id;
            await requests.addUser("Foo", "Foo123@Bar.com", "Foo123");
            const user = await AppUsers.findAll({ where: { name: "Foo" } });
            const user_id = user[0].dataValues.id;

            // Exercise:
            const result = await requests.addVoteForSystem(user_id, system_id);

            // Verify:
            assert.isObject(result);

            // Teardown:
            // Delete Vote
            await Votes.destroy({ where: { user_id: user_id } });
            // Delete systems dummy data
            await Systems.destroy({ where: { name: "Test System" } });
            // Delete manufacturer dummy data
            await Manufacturers.destroy({ where: { name: "Test Manufacturer" } });
            // Delete user dummy data
            await AppUsers.destroy({ where: { name: "Foo" } });
        });
    });
    describe('getUserVote', () => {
        it('Will get a vote for a system and return an array', async () => {
            // Setup: Create a Manufacturer > System > User > Vote
            await requests.addManufacturer("Test Manufacturer");
            const manufacturer = await Manufacturers.findAll({ where: { name: "Test Manufacturer" } });
            const manufacturer_id = manufacturer[0].dataValues.id;
            await requests.addSystem("Test System", 1972, 1975, 28, 1, 350000, "Console", 0, "Test System 2", null, 0, null, manufacturer_id);
            const system = await Systems.findAll({ where: { name: "Test System" } });
            const system_id = system[0].dataValues.id;
            await requests.addUser("Foo", "Foo123@Bar.com", "Foo123");
            const user = await AppUsers.findAll({ where: { name: "Foo" } });
            const user_id = user[0].dataValues.id;
            await requests.addVoteForSystem(user_id, system_id);

            // Exercise:
            const result = await requests.getUserVote(user_id);

            // Verify:
            assert.isArray(result);

            // Teardown:
            // Delete Vote
            await Votes.destroy({ where: { user_id: user_id } });
            // Delete systems dummy data
            await Systems.destroy({ where: { name: "Test System" } });
            // Delete manufacturer dummy data
            await Manufacturers.destroy({ where: { name: "Test Manufacturer" } });
            // Delete user dummy data
            await AppUsers.destroy({ where: { name: "Foo" } });
        });
    });
    describe('getUsersComments', () => {
        it('Will return an array of comments belonging to a system along with the users who posted them', async () => {
            // Setup: Create a Manufacturer > System > User > Comment
            await requests.addManufacturer("Test Manufacturer");
            const manufacturer = await Manufacturers.findAll({ where: { name: "Test Manufacturer" } });
            const manufacturer_id = manufacturer[0].dataValues.id;
            await requests.addSystem("Test System", 1972, 1975, 28, 1, 350000, "Console", 0, "Test System 2", null, 0, null, manufacturer_id);
            const system = await Systems.findAll({ where: { name: "Test System" } });
            const system_id = system[0].dataValues.id;
            await requests.addUser("Foo", "Foo123@Bar.com", "Foo123");
            const user = await AppUsers.findAll({ where: { name: "Foo" } });
            const user_id = user[0].dataValues.id;
            await requests.addComment("Hello World", user_id, system_id);

            // Exercise:
            const result = await requests.getUsersComments(system_id);

            // Verify:
            assert.isArray(result);

            // Teardown:
            // Delete Comment
            await Comments.destroy({ where: { comment: "Hello World" } });
            // Delete systems dummy data
            await Systems.destroy({ where: { name: "Test System" } });
            // Delete manufacturer dummy data
            await Manufacturers.destroy({ where: { name: "Test Manufacturer" } });
            // Delete user dummy data
            await AppUsers.destroy({ where: { name: "Foo" } });
        });
    });
    describe('getUserComments', () => {
        it('Will return an array of all comments on systems that an individual user made', async () => {
            // Setup: Create a Manufacturer > System > User > Comment
            await requests.addManufacturer("Test Manufacturer");
            const manufacturer = await Manufacturers.findAll({ where: { name: "Test Manufacturer" } });
            const manufacturer_id = manufacturer[0].dataValues.id;
            await requests.addSystem("Test System", 1972, 1975, 28, 1, 350000, "Console", 0, "Test System 2", null, 0, null, manufacturer_id);
            const system = await Systems.findAll({ where: { name: "Test System" } });
            const system_id = system[0].dataValues.id;
            await requests.addUser("Foo", "Foo123@Bar.com", "Foo123");
            const user = await AppUsers.findAll({ where: { name: "Foo" } });
            const user_id = user[0].dataValues.id;
            await requests.addComment("Hello World", user_id, system_id);

            // Exercise:
            const result = await requests.getUserComments(system_id);

            // Verify:
            assert.isArray(result);

            // Teardown:
            // Delete Comment
            await Comments.destroy({ where: { comment: "Hello World" } });
            // Delete systems dummy data
            await Systems.destroy({ where: { name: "Test System" } });
            // Delete manufacturer dummy data
            await Manufacturers.destroy({ where: { name: "Test Manufacturer" } });
            // Delete user dummy data
            await AppUsers.destroy({ where: { name: "Foo" } });
        });
    });
    describe('getUserVotes', () => {
        it('Will return an array of votes belonging to a system including the users who made the votes', async () => {
            // Setup: Create a Manufacturer > System > User > Vote
            await requests.addManufacturer("Test Manufacturer");
            const manufacturer = await Manufacturers.findAll({ where: { name: "Test Manufacturer" } });
            const manufacturer_id = manufacturer[0].dataValues.id;
            await requests.addSystem("Test System", 1972, 1975, 28, 1, 350000, "Console", 0, "Test System 2", null, 0, null, manufacturer_id);
            const system = await Systems.findAll({ where: { name: "Test System" } });
            const system_id = system[0].dataValues.id;
            await requests.addUser("Foo", "Foo123@Bar.com", "Foo123");
            const user = await AppUsers.findAll({ where: { name: "Foo" } });
            const user_id = user[0].dataValues.id;
            await requests.addVoteForSystem(user_id, system_id);

            // Exercise:
            const result = await requests.getUserVotes(system_id);

            // Verify:
            assert.isArray(result);

            // Teardown:
            // Delete Vote
            await Votes.destroy({ where: { system_id: system_id } });
            // Delete systems dummy data
            await Systems.destroy({ where: { name: "Test System" } });
            // Delete manufacturer dummy data
            await Manufacturers.destroy({ where: { name: "Test Manufacturer" } });
            // Delete user dummy data
            await AppUsers.destroy({ where: { name: "Foo" } });
        });
    });
    describe('getUserVote', () => {
        it('Will return an array containing system details for the system an individual user voted for', async () => {
            // Setup: Create a Manufacturer > System > User > Vote
            await requests.addManufacturer("Test Manufacturer");
            const manufacturer = await Manufacturers.findAll({ where: { name: "Test Manufacturer" } });
            const manufacturer_id = manufacturer[0].dataValues.id;
            await requests.addSystem("Test System", 1972, 1975, 28, 1, 350000, "Console", 0, "Test System 2", null, 0, null, manufacturer_id);
            const system = await Systems.findAll({ where: { name: "Test System" } });
            const system_id = system[0].dataValues.id;
            await requests.addUser("Foo", "Foo123@Bar.com", "Foo123");
            const user = await AppUsers.findAll({ where: { name: "Foo" } });
            const user_id = user[0].dataValues.id;
            await requests.addVoteForSystem(user_id, system_id);

            // Exercise:
            const result = await requests.getUserVote(user_id);

            // Verify:
            assert.isArray(result);

            // Teardown:
            // Delete Vote
            await Votes.destroy({ where: { system_id: system_id } });
            // Delete systems dummy data
            await Systems.destroy({ where: { name: "Test System" } });
            // Delete manufacturer dummy data
            await Manufacturers.destroy({ where: { name: "Test Manufacturer" } });
            // Delete user dummy data
            await AppUsers.destroy({ where: { name: "Foo" } });
        });
    });
});

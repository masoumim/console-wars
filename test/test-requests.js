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

describe('Requests', () => {
    describe('getAllSystems', () => {
        it('Will return an array of all systems', async () => {
            // Exercise:
            const response = await requests.getAllSystems();

            // Verify
            assert.isArray(response);
        });
    });
    describe('getSystem', () => {
        it('Will return an array representing a system and its data', async () => {
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
});

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

describe('Requests', () => {
    describe('getAllSystems', () => {
        it('Will return an array', async () => {
            // Exercise:
            const response = await requests.getAllSystems();

            // Verify
            assert.isArray(response);
        });
    });
    describe('addSystem', () => {
        it('Will add system and return an object if insert is successful', async () => {
            // Setup:
            // Add dummy data row in manufacturers table because adding a row to the systems table requires a valid manufacturer foreign key 
            await requests.addManufacturer("Manufacturer Test");
            const manufacturer = await Manufacturers.findAll({ where: { name: "Manufacturer Test" } });
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
    describe('addManufacturer', () => {
        it('Will add manufacturer and return an object if insert is successful', async () => {
            // Exercise:
            const result = await requests.addManufacturer("Manufacturer Test");

            // Verify:
            assert.isObject(result);

            // Teardown:
            await Manufacturers.destroy({ where: { name: "Manufacturer Test" } });
        });
    });
});

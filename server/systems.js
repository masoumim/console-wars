// Import modules and libraries
const express = require("express");

// Create the user router
const router = express.Router();

// Requre in the requests module
const requests = require("../services/requests.js");

// Middleware to select all systems and add them to the request parameter
// for routes that begin with '/systems'
router.use('/systems', async (req, res, next) => {
    try {
        // Get all systems from the DB
        const resultArray = await requests.getAllSystems();

        // Store only the dataValue objects in a systems array
        // (dataValue objects are single objects that contain the data for one system)
        const systems = [];
        for (element in resultArray) {
            systems.push(resultArray[element].dataValues);
        }

        // Add the systems array to the request parameter
        req.systems = systems;
        next();
    } catch (err) {
        res.status(500).send(err);
    }
});

// GET systems (/systems)
router.get("/systems", async (req, res) => {
    // Render the systems page using systems data
    res.status(200).render("systems", { systems: req.systems });
});

// GET Compare (/systems/compare)
router.get("/systems/compare", async (req, res) => {
    // Render the compare page using systems data
    res.status(200).render("compare", { systems: req.systems });
});

// GET VS (systems/vs)
router.get("/systems/vs", async (req, res) => {
    // If either system1 or system2 aren't included in the URL, redirect user back to compare page
    if (!req.query.system1 || !req.query.system2) {
        res.redirect("/systems/compare");
    }
    else {
        // Check that both req.query.system(1 & 2) parameters are valid
        const systemNames = [];
        for (element in req.systems) {
            systemNames.push(req.systems[element].name);
        }

        if (!systemNames.includes(req.query.system1) || !systemNames.includes(req.query.system2)) {
            res.redirect("/systems/compare");
        }
        else {
            // Render the VS page using the two systems data
            res.status(200).render("vs");
        }
    }
});

// TODO: Add a systems/compare/:id route from a system page
// To take user to the compare page with one of the systems pre-selected

// GET system (/systems/:systemId)
router.get("/systems/:id", async (req, res) => {
    try {
        // Get the system by id
        const resultArray = await requests.getSystem(req.params.id);

        // Throw error if no system has that ID
        if (resultArray.length === 0) {
            throw "That system doesn't exist!";
        }
        else {
            // Get the system data from the result array
            const systemData = resultArray[0].dataValues;

            // Get the system's manufacturer
            const systemManufacturerResult = await requests.getManufacturerByID(systemData.manufacturer_id);
            const systemManufacturer = systemManufacturerResult[0].dataValues.name;

            // Get the system's specs
            const systemSpcesResult = await requests.getSystemSpecsBySystemID(systemData.id);
            const systemSpecs = systemSpcesResult[0].dataValues;

            // Render page with retrieved system        
            res.status(200).render("system", { system: systemData, manufacturer: systemManufacturer, specs: systemSpecs });
        }
    } catch (err) {
        res.status(500).send(err);
    }
});

// Export the user router
module.exports = router;
// Import modules and libraries
const express = require("express");

// Create the user router
const router = express.Router();

// Requre in the requests module
const requests = require("../services/requests.js");

// GET systems (/systems)
router.get("/systems", async (req, res) => {
    try {
        // Get all systems from the DB
        const resultArray = await requests.getAllSystems();

        // Store only the dataValue objects in a systems array
        // (dataValue objects are single objects that contain the data of one system)
        const systems = [];
        for (element in resultArray) {
            systems.push(resultArray[element].dataValues);
        }

        // Render the systems page using systems data
        res.status(200).render("systems", { systems: systems });
    } catch (err) {
        res.status(500).send(err);
    }
});

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
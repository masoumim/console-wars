// Import modules and libraries
const express = require("express");

// Create the user router
const router = express.Router();

// Require in the requests module
const requests = require("../services/requests.js");

// Require in the ranking module
const ranking = require("../utils/ranking.js");

// Require in the system descriptions JSON file
const systemDescriptionsJSON = require("../public/json/descriptions.json");

// Require the express-validator library. Used as middleware in routes to check data validity
const { check, validationResult } = require("express-validator");

// Middleware to select all systems and add them to the request parameter
// for routes that begin with '/systems'
router.use('/systems', async (req, res, next) => {
    try {
        // Get all systems from the DB        
        const result = await requests.getAllSystems();

        // Store each system object in an array
        const systems = [];
        for (element in result) {
            systems.push(result[element]);
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
    // Get the ranking number for each system
    const systemRanks = await ranking.rankAllSystems(req.systems);

    // Render the systems page using systems data and ranks
    res.status(200).render("systems", { systems: req.systems, systemRanks:systemRanks });
});

// GET Compare (/systems/compare)
router.get("/systems/compare", async (req, res) => {    
    // Render the compare page using systems data
    res.status(200).render("compare", { systems: req.systems });
});

// GET Compare System 1 Pre-selected (/systems/compare/:system1)
router.get("/systems/compare/:system1", async (req, res) => {

    const system1 = req.params.system1;

    // Render the compare page using systems data and system1 pre-selected
    res.status(200).render("comparesystem1", { systems: req.systems, system1: system1 });
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
            // Get data for system 1
            const dataResult1 = await requests.getSystemByName(req.query.system1)
            const system1 = dataResult1[0];
            
            // Get specs for system 1
            const specsResult1 = await requests.getSystemSpecsBySystemID(system1.id);
            const system1Specs = specsResult1[0].dataValues;

            // Get manufacturer for system 1
            const manufacturerResult1 = await requests.getManufacturerByID(system1.manufacturer_id);
            const system1Manufacturer = manufacturerResult1[0].dataValues;

            // Get rank for system 1
            const system1Rank = await ranking.systemRank(req.systems, system1.id);
            
            // Get data for system 2
            const dataResult2 = await requests.getSystemByName(req.query.system2)
            const system2 = dataResult2[0];

            // Get specs for system 2
            const specsResult2 = await requests.getSystemSpecsBySystemID(system2.id);
            const system2Specs = specsResult2[0].dataValues;

            // Get manufacturer for system 2
            const manufacturerResult2 = await requests.getManufacturerByID(system2.manufacturer_id);
            const system2Manufacturer = manufacturerResult2[0].dataValues;

            // Get rank for system 1
            const system2Rank = await ranking.systemRank(req.systems, system2.id);

            // Render the VS page using the two systems data
            res.status(200).render("vs", { system1: system1, system1Specs: system1Specs, system1Manufacturer: system1Manufacturer, system2: system2, system2Specs: system2Specs, system2Manufacturer: system2Manufacturer, system1Rank: system1Rank, system2Rank: system2Rank });
        }
    }
});

// GET system (/systems/:systemId)
router.get("/systems/:id", async (req, res) => {
    try {
        // Get the system data, num votes, num of comments
        const system = await requests.getSystem(req.params.id);
        const systemData = system[0];
       
        // Throw error if no system has that ID
        if (system.length === 0) {
            throw "That system doesn't exist!";
        }
        else {
            // // Get the system's manufacturer
            const systemManufacturerResult = await requests.getManufacturerByID(systemData.manufacturer_id);
            const systemManufacturer = systemManufacturerResult[0].dataValues.name;

            // Get the system's specs
            const systemSpecesResult = await requests.getSystemSpecsBySystemID(systemData.id);
            const systemSpecs = systemSpecesResult[0].dataValues;

            // Get user comments
            const userComments = await requests.getUsersComments(req.params.id);

            // Get user votes
            const userVotes = await requests.getUserVotes(req.params.id);
                        
            // Get the rank for this system
            const systemRank = await ranking.systemRank(req.systems, req.params.id);

            // Get the description from JSON file
            const systemName = systemData.name;
            let systemDescription = systemDescriptionsJSON[systemName];
            
            // Add line breaks to text by splitting text on '\n'
            systemDescription = systemDescription.split("\n");            
            
            // Render page with retrieved system data, comments + users       
            res.status(200).render("system", { system: systemData, systemRank: systemRank, manufacturer: systemManufacturer, specs: systemSpecs, userComments: userComments, userVotes: userVotes, systemDescription: systemDescription });
        }
    } catch (err) {
        res.status(500).send(err);
    }
});

// POST Comment (/systems/:id)
router.post("/systems/:id",
    [
        check('comment').not().isEmpty().withMessage('Comment can not be empty'),
        check('comment').isLength({ min: 3 }).withMessage('Comment must be at least 3 characters long'),
        check('comment').isLength({ max: 200 }).withMessage('Comment can not be longer that 200 characters')
    ], async (req, res) => {
        try {
            // If express-validator catches any errors, throw them to catch block
            const errors = validationResult(req).array();
            if (errors.length > 0) {
                throw errors[0].msg;
            }

            // Check if there is an active, authenticated User currently logged in
            if (req.user) {

                // Get the submitted comment
                const submittedComment = req.body.comment;

                // Add the comment to the db
                await requests.addComment(submittedComment, req.user.id, parseInt(req.params.id));

                // Reload the page to show the new comment
                res.status(201).redirect(req.originalUrl);
            }
            else {
                res.redirect("/");
            }
        } catch (err) {
            res.status(500).send(err);
        }
    });

// POST VOTE (/systems/:id/vote)
router.post("/systems/:id/vote", async (req, res) => {
    try {
        // Check if there is an active, authenticated User currently logged in
        if (req.user) {

            // Check if user has already placed a vote for a system
            const userVote = await requests.getUserVote(req.user.id);
            
            if (userVote.length === 0) {
                // Add the vote to the DB
                await requests.addVoteForSystem(req.user.id,req.params.id);

                // Redirect user to the systems page
                res.status(201).redirect("/systems");
            }
            else {
                // Otherwise, redirect user to their profile page
                res.status(409).redirect("/profile");
            }
        }
        else {
            res.redirect("/");
        }
    } catch (err) {
        res.status(500).send(err);
    }
});




// Export the user router
module.exports = router;
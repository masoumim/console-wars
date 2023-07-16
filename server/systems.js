// Import modules and libraries
const express = require("express");

// Create the user router
const router = express.Router();

// Requre in the requests module
const requests = require("../services/requests.js");

// Require in the ranking module
const ranking = require("../utils/ranking.js");

// Require the express-validator library. Used as middleware in routes to check data validity
const { check, validationResult } = require("express-validator");

// Middleware to select all systems and add them to the request parameter
// for routes that begin with '/systems'
router.use('/systems', async (req, res, next) => {
    try {
        // Get all systems from the DB
        // const resultArray = await requests.getAllSystems();
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
    // Get the number of comments for each system    
    const systemNumComments = [];    
    for (element in req.systems) {
        const obj = {};
        obj.systemID = req.systems[element].id
        const comments = await requests.getCommentsBySystemID(obj.systemID);
        obj.numComments = comments.length;        
        systemNumComments.push(obj);
    }
    
    // Get the number of votes for each system
    const systemNumVotes = [];
    for (element in req.systems) {
        const obj = {};
        obj.systemID = req.systems[element].id
        const votes = await requests.getVotesBySystemID(obj.systemID);
        obj.numVotes = votes.length;        
        systemNumVotes.push(obj);
    }

    // Get the ranking number for each system
    const systemRanks = await ranking.rankAllSystems(systemNumVotes);

    // Render the systems page using systems data, num of comments and num of votes
    res.status(200).render("systems", { systems: req.systems, numComments: systemNumComments, numVotes: systemNumVotes, systemRanks: systemRanks});
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
            // Get data for system 1
            const dataResult1 = await requests.getSystemByName(req.query.system1)
            const system1 = dataResult1[0].dataValues;

            // Get specs for system 1
            const specsResult1 = await requests.getSystemSpecsBySystemID(system1.id);
            const system1Specs = specsResult1[0].dataValues;

            // Get manufacturer for system 1
            const manufacturerResult1 = await requests.getManufacturerByID(system1.manufacturer_id);
            const system1Manufacturer = manufacturerResult1[0].dataValues;

            // Get data for system 2
            const dataResult2 = await requests.getSystemByName(req.query.system2)
            const system2 = dataResult2[0].dataValues;

            // Get specs for system 2
            const specsResult2 = await requests.getSystemSpecsBySystemID(system2.id);
            const system2Specs = specsResult2[0].dataValues;

            // Get manufacturer for system 2
            const manufacturerResult2 = await requests.getManufacturerByID(system2.manufacturer_id);
            const system2Manufacturer = manufacturerResult2[0].dataValues;

            // Render the VS page using the two systems data
            res.status(200).render("vs", { system1: system1, system1Specs: system1Specs, system1Manufacturer: system1Manufacturer, system2: system2, system2Specs: system2Specs, system2Manufacturer: system2Manufacturer });
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
            const systemSpecesResult = await requests.getSystemSpecsBySystemID(systemData.id);
            const systemSpecs = systemSpecesResult[0].dataValues;

            // Get the comments for this system
            const comments = [];
            const commentsResult = await requests.getCommentsBySystemID(req.params.id);
            if (commentsResult.length > 0) {
                for (element in commentsResult) {
                    const obj = {};
                    obj.id = commentsResult[element].dataValues.id;                    
                    obj.comment = commentsResult[element].dataValues.comment;
                    obj.user_id = commentsResult[element].dataValues.user_id;
                    obj.system_id = commentsResult[element].dataValues.system_id;
                    comments.push(obj);
                }
            }

            // Get the user for each of the comments            
            const commentUsers = [];
            const commentUsersResult = await requests.getUsersByCommentID(comments);
            if (commentUsersResult.length > 0) {
                for (element in commentUsersResult) {
                    const obj = {};
                    obj.id = commentUsersResult[element].id;
                    obj.name = commentUsersResult[element].name;
                    obj.email = commentUsersResult[element].email;
                    commentUsers.push(obj);
                }
            }

            // Get the votes for this system
            const votes = [];
            const votesResult = await requests.getVotesBySystemID(req.params.id);
            if (votesResult.length > 0) {                
                for (element in votesResult) {
                    const obj = {};                    
                    obj.id = votesResult[element].dataValues.id;                                                          
                    obj.user_id = votesResult[element].dataValues.user_id;                                         
                    obj.system_id = votesResult[element].dataValues.system_id;                      
                    votes.push(obj);
                }
            }

            // Get the user for each of the votes            
            const voteUsers = [];
            const voteUserResult = await requests.getUsersByVoteID(votes);
            if (voteUserResult.length > 0) {
                for (element in voteUserResult) {
                    const obj = {};
                    obj.id = voteUserResult[element].id;
                    obj.name = voteUserResult[element].name;
                    obj.email = voteUserResult[element].email;
                    voteUsers.push(obj);
                }
            }
            
            // Get Rank for system
            // Get the number of votes for each system
            const systemNumVotes = [];
            for (element in req.systems) {
                const obj = {};
                obj.systemID = req.systems[element].id
                const votes = await requests.getVotesBySystemID(obj.systemID);
                obj.numVotes = votes.length;
                systemNumVotes.push(obj);
            }
            
            // Get the ranking number for each system
            const systemRank = await ranking.systemRank(systemNumVotes, req.params.id);
            
            // Render page with retrieved system data, comments + users       
            res.status(200).render("system", { system: systemData, manufacturer: systemManufacturer, specs: systemSpecs, comments: comments, commentUsers: commentUsers, votes: votes, voteUsers: voteUsers, systemRank: systemRank });
        }
    } catch (err) {
        res.status(500).send(err);
    }
});

// POST Comment (/systems/:id)
router.post("/systems/:id",
    [
        check('comment').not().isEmpty().withMessage('Comment can not be empty'),
        check('comment').isLength({ min: 3 }).withMessage('Comment must be at least 3 characters long')
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
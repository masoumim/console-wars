// Import modules and libraries
const express = require("express");
const passport = require("passport");
const bcrypt = require("bcrypt");

// Import the requests module
const requests = require("../services/requests");

// Require the express-validator library. Used as middleware in routes to check data validity
const { check, validationResult } = require("express-validator");

// Create the user router
const router = express.Router();

// GET HOME
router.get("/", (req, res) => {
    // If user is logged in - render their profile
    if (req.user) {
        res.status(200).redirect("/profile");
    }
    else {
        // Otherwise, render home / index        
        res.status(200).render("index");
    }
});

// GET PROFILE
router.get("/profile", async (req, res) => {
    if (req.user) {
        try {
            
            // TODO: Replace this method with one that gets user vote + the corresponding system
            // Get user Vote
            const userVote = requests.getUserVote(req.user.id);

            // Render the profile page with user data from DB
            res.status(200).render("profile", { user: req.user });

        } catch (err) {
            res.status(500).send(err);
        }
    } else {
        // If user isn't logged in, render the index page
        res.status(200).redirect("/");
    }
});

// GET REGISTER
router.get("/register", (req, res) => {
    res.status(200).render("register");
});

// GET LOGOUT
// Passport.js exposes a logout function within the request object: req.logout. 
router.get('/logout', function (req, res, next) {
    req.logout(function (err) {
        if (err) { return next(err); }
        res.status(200).redirect('/');
    });
});

// POST REGISTER:
router.post("/register",
    [
        check('username').not().isEmpty().withMessage('Username is required'),
        check('password').not().isEmpty().withMessage('Password is required'),
        check('password').isLength({min: 5}).withMessage('Password must be at least 5 characters long')
    ], async (req, res) => {
        try {
            // If express-validator catches any errors, throw them to catch block
            const errors = validationResult(req).array();
            if (errors.length > 0) {
                throw errors[0].msg;
            }

            // Get username and password from the request body
            const { username, password, email } = req.body;

            // Check if a user with that name already exists in the db
            const userCheck = await requests.getUserByName(username);

            if (userCheck.length === 0) {
                // Hash the user's password:
                // 1. Generate salt with 10 Salt Rounds
                const salt = await bcrypt.genSalt(10);

                // 2. Hash password
                const hashedPassword = await bcrypt.hash(password, salt);

                // Create new user:
                const resultUser = await requests.addUser(username, hashedPassword, email);

                // Add if/else statement with the new user as the condition:
                if (resultUser) {
                    // Send correct response if new user is created:
                    res.status(201).redirect("/");
                } else {
                    // Send correct response if new user failed to be created:
                    res.status(500).json({ msg: "Error: not able to register user" });
                }
            }
            else {
                res.status(500).send("Sorry, please enter a valid user name");
            }

        } catch (error) {
            res.status(500).send(`${error}`);
        }
    });

/*
Pass in passport.authenticate() as middleware. 
Using this middleware allows Passport.js to take care of the authentication 
process behind the scenes and creates a user session for us.
If successful, the user will be Serialized
*/
// POST LOGIN
router.post("/", passport.authenticate("local", { failureRedirect: "/" }), (req, res) => {
    res.status(200).redirect("profile");
});

// Export the user router
module.exports = router
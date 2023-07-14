// Require in express module
const express = require('express');

// Create instance of an express module
const app = express();

// Require in path module for serving static files from the "public" folder
const path = require('path');

// Static middleware for serving static files located in public folder (css, images etc)
app.use("/public", express.static(path.join(__dirname, 'public')));

// Require in the dotenv module
// Will load environment variables contained in .env file
require('dotenv').config();

// Request in the pg module used for connecting to PostgreSQL databases
const { Pool } = require('pg');

// Require in the Passport.JS - used for Authentication
const passport = require("passport");

// Import the Passport config
require("./passport.js");

// Require in the express-sessions module
const session = require("express-session");

// pgSession is used to store a users session in a postgreSQL db
const pgSession = require('connect-pg-simple')(session);

// Helmet sets HTTP headers to comply with web security standards
const helmet = require("helmet");

// Enables body parsing
app.use(express.json());

// Enables body parsing of HTML form data
app.use(express.urlencoded({ extended: false }));

// The port which the app will run on
const PORT = process.env.PORT || 8080;

// Use the EJS Template engine
app.set("view engine", "ejs");

// Create a new PostgreSQL pool to be used for the user_sessions table
const pgPool = new Pool({
    connectionString: process.env.DATABASE_URL,
    ssl: {
        rejectUnauthorized: false
    }
});

// Configure the session options
app.use(
    session({
        secret: process.env.SESSION_SECRET,
        cookie: { maxAge: 300000000, secure: "auto" },
        resave: false,
        saveUninitialized: false,
        store: new pgSession({
            pool: pgPool,                // Connection pool
            tableName: 'session'         // Table used to store user's session data           
        })
    })
);

// Passport.JS is a middleware and must be implemented using app.use(). 
// The initialize() method initializes the authentication module across our app.
app.use(passport.initialize());

/*
We want to allow for persistent logins, and we can do this by calling session() on our passport module
The session() middleware alters the request object and is able to attach 
a ‘user’ value that can be retrieved from the session id.
*/
app.use(passport.session());

// Require in the routes from systems.js
const systemsRouter = require("./server/systems.js");
app.use(systemsRouter);

// Require in the routes from user.js
const userRouter = require("./server/user.js");
app.use(userRouter);

// Start the server listening at PORT
app.listen(PORT, () => {
    console.log(`server is listening on ${PORT}`);
});
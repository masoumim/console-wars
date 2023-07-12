// Require in express module
const express = require('express');

// Create instance of an express module
const app = express();

// Enables body parsing
app.use(express.json());

// The port which the app will run on
const PORT = process.env.PORT || 8080;

// Use the EJS Template engine
app.set("view engine", "ejs");

// Require in path module for serving static files from the "public" folder
const path = require('path');

// Static middleware for serving static files located in public folder (css, images etc)
app.use("/public", express.static(path.join(__dirname, 'public')));

// Require in the routes from systems.js
const systemsRouter = require("./server/systems.js");
app.use(systemsRouter);

// Start the server listening at PORT
app.listen(PORT, () => {
    console.log(`server is listening on ${PORT}`);
});
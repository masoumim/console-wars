// Require in express module
const express = require('express');

// Create instance of an express module
const app = express();

// Enables body parsing
app.use(express.json());

// The port which the app will run on
const PORT = process.env.PORT || 8080;

// Start the server listening at PORT
app.listen(PORT, () => {
    console.log(`server is listening on ${PORT}`);
});
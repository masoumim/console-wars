// Require in the Passport.JS - used for Authentication
const passport = require("passport");

// Passport.JS has various "Strategies" or flavors of authentication - here we use the "Local" strategy
const LocalStrategy = require("passport-local").Strategy;

// Used for hashing passwords
const bcrypt = require("bcrypt");

// Import the requests module
const requests = require("./services/requests.js");

// Configure the Local strategy
passport.use(new LocalStrategy(async function (username, password, done) {
    try {
        // Look up user in the db
        let user = await requests.getUserByName(username);

        // If user not found, 
        // return null and false in callback
        if (user.length === 0) return done(null, false);

        // If user found, but password not valid, 
        // return null and false in callback
        // Compare passwords:        
        const matchedPassword = await bcrypt.compare(password, user[0].dataValues.password);
        if (!matchedPassword) return done(null, false);

        // If user found and password valid, 
        // return the user object in callback
        return done(null, { id: user[0].dataValues.id, name: user[0].dataValues.name, password: user[0].dataValues.password, email: user[0].dataValues.email });
    } catch (err) {
        // If there's an error in db lookup, 
        // return err callback function        
        return done(err);
    }
})
);

/*
Serialize a user: Passport takes that user id and stores it internally on req.session.passport 
which is Passport’s internal mechanism to keep track of things.
*/
passport.serializeUser((user, done) => {
    done(null, user.id);
});

/*
Deserialize: We pass the key that was used when we initially serialized a user (id). 
The id is used to look up the user in storage, and the fetched object is attached to the 
request object as req.user across our whole application.
This way we’re able to access the logged-in user’s data in req.user on every subsequent request!
*/
passport.deserializeUser(async (id, done) => {
    try {
        const user = await requests.getUserByID(id);
        console.log(`USER: ${user}`);
        done(null, { id: user[0].dataValues.id, name: user[0].dataValues.name, password: user[0].dataValues.password, email: user[0].dataValues.email });
    } catch (err) {
        done(err);
    }
});
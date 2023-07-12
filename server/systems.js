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
        const result = await requests.getAllSystems();

        // Store only the dataValue objects in a systems array
        // (dataValue objects are single objects that contain the data of one system)
        const systems = [];
        for(element in result){
            systems.push(result[element].dataValues);
        }

        // Render the systems page using systems data
        res.status(200).render("systems", {systems: systems});
    } catch (err) {
        res.status(500).send(err);
    }
});

// // GET all images and captions for each image (/images)
// router.get("/images", async (req, res) => {
//     try {
//         if (myCache.has(key)) {
//             // CACHE HIT
//             // Get the cache data using the key
//             const allImagesCache = myCache.get(key);

//             // Render page with cached data
//             res.status(200).render("images", { images: allImagesCache.images, captions: allImagesCache.captions, users: allImagesCache.users });
//         }
//         else {
//             // CACHE MISS

//             // Get all images and image data (comments and users)
//             const data = await utils.getAllImageData();

//             // Save cache
//             myCache.set(key, data);

//             // Render page with array of img paths, captions and users
//             res.status(200).render("images", { images: data.images, captions: data.captions, users: data.users });
//         }
//     }
//     catch (err) {
//         res.status(500).send(err);
//     }
// });

// // POST caption (/image/:imageId)
// router.post("/image/:id",
//     [
//         check('comment').not().isEmpty().withMessage('Comment can not be empty'),
//         check('comment').isLength({ min: 3 }).withMessage('Comment must be at least 3 characters long')
//     ], async (req, res) => {
//         try {            
//             // If express-validator catches any errors, throw them to catch block
//             const errors = validationResult(req).array();
//             if (errors.length > 0) {
//                 throw errors[0].msg;
//             }

//             // Check if there is an active, authenticated User currently logged in
//             if (req.user) {                
//                 // Get the submitted comment
//                 const submittedComment = req.body.comment;

//                 // Add the caption to the db
//                 await requests.addCaption(submittedComment, req.user.id, parseInt(req.params.id));

//                 // Update the cache:            
//                 utils.updateAllImagesCache(key, myCache);

//                 // Update user data cache:
//                 utils.updateUserDataCache(req.user.id, user.userDataCache);
                
//                 // Reload the page to show the new comment
//                 res.status(201).redirect(req.originalUrl);
//             }
//             else {
//                 res.redirect("/");
//             }
//         } catch (err) {
//             res.status(500).send(err);
//         }
//     });

// Export the user router
module.exports = router;
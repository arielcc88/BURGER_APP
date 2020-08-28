//importing express and burger model.
const express = require("express");
const burger = require("../models/burger.js");

//getting router from express
const router = express.Router();

//route for index (home page) of the app
router.get("/", (req, res) => {
    burger.selectAll( (ormData) => {
        const dataObj = {burgers: ormData};
        //render view with data from DB
        console.log("index data", dataObj);
        //res.render("index", dataObj);
    } );
});





//export router for server.js
module.exports = router;
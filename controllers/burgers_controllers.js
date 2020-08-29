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
        res.render("index", dataObj);
    } );
});

//route to add new burger name
router.post("/api/burger", (req,res) => {
    burger.insertOne(["burger_name", "devoured"], [req.body.brgname, false], (results) => {
        //sending back the burger name
        res.json({id: results.insertId})
    })
});

//route to update devour state
router.put("/api/burger/:id", (req, res) => {
    const condition = "id = " + req.params.id;
    burger.updateOne({ devoured: true }, condition, (result) => {
        if (result.changedRows === 0) {
            return res.status(404).end();
        }
        res.status(200).end();
    });
})

//export router for server.js
module.exports = router;
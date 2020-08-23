//using custom orm in burger model.
const orm = require("../config/orm.js");

//create model burger
const burger = {
    //calling methods from orm
    //getting all burgers in DB table
    selectAll: function (cb) {
        orm.selectAll("burgers", (result) => {
            cb(result);
        });
    },
    //inserting burger method
    insertOne: function (cols, vals, cb) {
        orm.insertOne("burgers", cols, vals, (result) => {
            cb(result);
        });
    },
    //updating method (burger devoured: true, false)
    updateOne: function (col, condition, cb) {
        orm.updateOne("burgers", col, condition, (result) => {
            cb(result);
        })
    })
}
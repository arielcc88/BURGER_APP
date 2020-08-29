/**
 * --------------------------
 * SETTING UP EXPRESS
 * --------------------------
 */
 const express = require("express");
 const PORT = process.env.PORT || 3000;

 //express app
 const app = express();

 //body parser as JSON
 app.use(express.urlencoded({ extended: true }));
 app.use(express.json());

 //Static middleware to serve public content
 app.use(express.static("public"));

 //importing handlebars as templating engine
 const exphbs = require("express-handlebars");
 //handlebars settings
 app.engine("handlebars", exphbs({ defaultLayout: "main" }));
 app.set("view engine", "handlebars");

 //importing routes and set the app to use them
 const appRoutes = require("./controllers/burgers_controllers.js");
 app.use(appRoutes);


 //starting the server and listening at port
 app.listen(PORT, () => {
    console.log("Server started and listening on PORT: " + PORT);
 });





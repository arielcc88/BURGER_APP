//MYSQL instance for connection
const mysql = require("mysql");

//connection settings
const connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "rootpass",
    database:"BURGERS_DB"
});

//making connection
connection.connect((err) => {
    if (err){
        console.error("MYSQL Connection Error: " + err.stack);
        return;
    }
    console.log("MYSQL Connected as ID: " + connection.threadId);
});

//export connection
module.exports = connection;
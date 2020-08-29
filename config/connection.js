//MYSQL instance for connection
const mysql = require("mysql");
let connection;
//connection settings
if (process.env.JAWSDB_URL) {
    connection = mysql.createConnection(process.env.JAWSDB_URL);
}
else{
    connection = mysql.createConnection({
        host: "localhost",
        port: 3306,
        user: "",
        password: "",
        database:"BURGERS_DB"
    });
}

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
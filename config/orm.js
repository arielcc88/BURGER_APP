//importing mysql connection for ORM
const connection = require("./connection.js");

//Helper function to add '?' (question marks)
//into query string to pass values
function addQuestionMarks (qty) {
    const arrQM = [];

    for (let i = 0; i < qty; i++) {
        arrQM.push("?");
    }

    //return array as string
    return arrQM.toString();
}

//helper function to convert object's key:value into
//SQL syntax
function objToSQL (objValues) {
    const arrSQL = [];

    for (let key in objValues) {
        let value = objValues[key];
        if (Object.hasOwnProperty.call(objValues, key)) {
            // if string with spaces, add quotations
            if (typeof value === "string" && value.indexOf(" ") >= 0) {
              value = "'" + value + "'";
            }
            //pushing SQL string to array
            arrSQL.push(key + "=" + value);
        }
    }
    //return SQL syntax
    return arrSQL.toString();
}



//custom orm for DB transactions
//selectAll()
//insertOne()
//updateOne()
const orm = {
    selectAll: function (table, cb) {
        //declare query string
        const queryString = `SELECT * FROM ${table};`;
        connection.query(queryString, (err, result) => {
            if (err) {
                throw err;
            }
            //run callback
            cb(result);
        })
    },

    //---
    insertOne: function (table, cols, vals, cb) {
        //inserts a new entry
        const queryString = `INSERT INTO ${table} 
                             ( ${cols.toString()} )
                             VALUES 
                             ( ${addQuestionMarks(vals.length)} )`;
        
        console.log(`Executing Query: ${queryString}`);

        //executing query
        connection.query(queryString, vals, (err, result) => {
            if (err) throw err;
            //if no error, execute callback function
            cb(result);
        })
    },

    //--
    updateOne: function (table, col, condition, cb) {
        const queryString = `UPDATE ${table}
                             SET ${ objToSQL(col) } 
                             WHERE ${ condition }`;
        
        console.log(`Executing Query: ${queryString}`);
        //executing query
        connection.query(queryString, (err, result) => {
            if (err) throw err;
            //if no error, execute callback function
            cb(result);
        })
    }
};

//exporting custom orm for model Burger
module.exports = orm;
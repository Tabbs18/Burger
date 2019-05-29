var connection = require("../config/connection.js");

//create three methods that will be necessary commands in order to retrieve and store data in the database
//selectAll()
//insertOne()
//updateOne()
//function for SQL syntax 
function printQuestionMarks(num) {
    var arr = [];

    for (var ctr = 0; ctr < num; ctr++) {
        arr.push("?");
    }

    return arr.toString();
}

function objToSql(ob) {

    var arr = [];

    for (var key in ob) {
        if (Object.hasOwnProperty.call(ob[key])) {
            arr.push(key + "=" + ob[key]);
        }
    }
    return arr.toString();
}

//select all function
var orm = {
        selectAll: function (tableInput, cb) {
            var queryString = "SELECT * FROM " + tableInput + ";";
            connection.query(queryString, function (err, result) {
                if (err) {
                    throw err;
                }
                cb(result);
            });
        },
        //inserting function
        insertOne: function (table, cols, vals, cb) {
            var queryString = "INSERT INTO " + table;

            queryString += " (";
            queryString += cols.toString();
            queryString += ") ";
            queryString += "VALUES (";
            queryString += printQuestionMarks(vals.length);
            queryString += ") ";

            console.log(queryString);

            connection.query(queryString, vals, function (err, result) {
                if (err) {
                    throw err;
                }

                cb(result);
            });
        },

        //update funciion
        updateOne: function (table, objColVals, condition, cb) {
            var queryString = "UPDATE " + table;

            queryString += " SET ";
            queryString += objToSql(objColVals);
            queryString += " WHERE ";
            queryString += condition;
            console.log(queryString);
            connection.query(queryString, function(err, result) {
                if (err) {
                  throw err;
                }
                cb(result);
              });
            }
        };
        // Export the orm object for the model (burger.js).
        module.exports = orm;
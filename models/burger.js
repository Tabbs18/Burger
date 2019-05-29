var orm = require("../config/orm");

var burger = {
    selectAll: function(cb) {
      orm.selectAll("burgers", cols, vals, function(res) {
        cb(res);
      });
    },
    // The variables cols and vals are arrays.
    insertOne: function(objColsVals, condition, cb) {
      orm.insertOne("burgers", objColsVals, condition, function(res) {
        cb(res);
      });
    },
    updateOne: function(objColVals, condition, cb) {
      orm.updateOne("burgers", objColVals, condition, function(res) {
        cb(res);
      });
    }
  };
  
// Export the database functions for the controller (burgers_Controller.js)
module.exports = burger;  
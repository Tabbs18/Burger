var express = require('express');

var router = express.Router();

var burger = require("../models/burger");


//GET method

router.get("/", function(req, res){
    burger.selectAll(function(data){
        var hbsObject = {
            burgers: data
        };
        console.log(hbsObject);
        res.render("index", hbsObject);
    });
});

//POST method

router.post("/", function(req, res) {
    burger.insertOne([
      "burger_name"], [
      req.body.name], function() {
      res.redirect("/");
    });
  });
  //PUT / update function

  router.put("/", function(req, res){
      var condition = "id = " + req.params.id;

      console.log("condition", condition);

      burger.updateOne({
        devoured: req.body.devoured
      }, condition, function() {
        res.redirect("/");
      });
    });
// Export routes for server.js to use.
module.exports = router;
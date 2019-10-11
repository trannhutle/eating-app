var express = require("express");
var router = express.Router();
const foodServices = require("../services/foodServices");

/* GET home page. */
router.get("/", function(req, res, next) {
  foodServices.getFoods(req, res, food => {
    return res.status(200).json(food);
  });
});

module.exports = router;

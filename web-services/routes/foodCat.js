var express = require("express");
var router = express.Router();
const foodCatServices = require("../services/foodCat");

router.get("/", (req, res, next) => {
  foodCatServices.getFoodCats(req, res, foodCats => {
    console.log("get cat sucessfully before returning to client");
    return res.status(200).json(foodCats);
  });
});

module.exports = router;

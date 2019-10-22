var express = require("express");
var router = express.Router();
const foodServices = require("../services/food");

/* GET home page. */
router.get("/", function(req, res, next) {
  foodServices.getFoods(req, res, foods => {
    return res.status(200).json(foods);
  });
});

router.get("/detail", (req, res, next) => {
  const id = req.query.id;
  if (id) {
    foodServices.getFoodDetail(req, res, food => {
      return res.status(200).json(food);
    });
  } else {
    return res.status(400).json({
      title: "Missing food id"
    });
  }
});

router.get("/cat", (req, res, next) => {
  const cat = req.query.cat;
  const page = req.query.page;

  foodServices.getFoods(req, res, foodCats => {
    return res.status(200).json(foodCats);
  });
});
module.exports = router;

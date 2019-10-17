var express = require("express");
var router = express.Router();
const foodServices = require("../services/foodServices");

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
module.exports = router;

const FoodCat = require("../models/FoodCat");

const getFoodCats = (req, res, next) => {
  FoodCat.find()
    .sort({ isPinned: -1 })
    .exec((err, foodCats) => {
      console.log(err);
      if (err) {
        return res.status(500).json({
          title: "An error occured",
          error: error
        });
      }
      console.log("get cat sucessfully");
      next(foodCats);
    });
};

module.exports = {
  getFoodCats
};

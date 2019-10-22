const Food = require("../models/Food");
const FoodCat = require("../models/FoodCat");
const mongoose = require("mongoose");

const getFoods = (req, res, next) => {
  const cat = req.query.cat;
  const page = req.query.page;
  if (cat === "default") {
    try {
      FoodCat.findOne({ isPinned: { $eq: true } }).exec((err, foodCat) => {
        Food.find({ category: { $in: [mongoose.Types.ObjectId(foodCat._id)] } })
          .populate(["category", "tags", "sizes"])
          .exec((err, foods) => {
            if (err) {
              return res.status(500).json({
                title: "An error occured",
                error: error
              });
            }
            next(foods);
          });
      });
    } catch (err) {
      console.error(err);
    }
  } else {
    try {
      Food.find({ category: { $in: [mongoose.Types.ObjectId(cat)] } })
        .populate(["category", "tags", "sizes"])
        .exec((err, foods) => {
          if (err) {
            return res.status(500).json({
              title: "An error occured",
              error: error
            });
          }
          next(foods);
        });
    } catch (err) {
      console.error(err);
    }
  }
};

const getFoodDetail = (req, res, next) => {
  const id = req.query.id;
  if (mongoose.Types.ObjectId.isValid(id)) {
    Food.findById(id)
      // .populate("tags")
      .exec((err, food) => {
        console.log(err);
        if (err) {
          return res.status(500).json({
            title: "An error occured",
            error: error
          });
        }
        if (food) {
          next(food);
        } else {
          return res.status(400).json({
            title: "Missing food id"
          });
        }
      });
  } else {
    return res.status(400).json({
      title: "Invalid food id"
    });
  }
};

module.exports = {
  getFoods,
  getFoodDetail
};

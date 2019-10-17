const Food = require("../models/Food");
const mongoose = require("mongoose");

const getFoods = (req, res, next) => {
  try {
    Food.find()
      .populate("tags")
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

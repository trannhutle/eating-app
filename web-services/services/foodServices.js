const Food = require("../models/Food");

const getFoods = (req, res, next) => {
  try {
    Food.find()
      // .populate({
      //   path: "tags",
      // })
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

module.exports = {
  getFoods
};

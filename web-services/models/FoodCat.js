const mongoose = require("../dbInit/init");
const Schema = mongoose.Schema;

const foodCatSchema = Schema({
  _id: Schema.Types.ObjectId,
  name: String,
  createDate: Date,
  updatedDate: Date
});

module.exports = mongoose.model("FoodCat", foodCatSchema);

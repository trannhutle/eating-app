const mongoose = require("../dbInit/init");
const Schema = mongoose.Schema;

const foodCatSchema = Schema({
  _id: Schema.Types.ObjectId,
  name: String,
  isPinned: { type: Boolean, default: false },
  createDate: Date,
  updatedDate: Date
});

module.exports = mongoose.model("FoodCat", foodCatSchema);

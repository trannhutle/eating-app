const mongoose = require("../dbInit/init");
const Schema = mongoose.Schema;

const foodTagSchema = Schema({
  _id: Schema.Types.ObjectId,
  name: String,
  createDate: { type: Date, default: Date.now() },
  updatedDate: { type: Date, default: Date.now() }
});

module.exports = mongoose.model("FoodTag", foodTagSchema);

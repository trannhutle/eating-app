const mongoose = require("../dbInit/init");
const Schema = mongoose.Schema;
require("../models/FoodCat");
require("../models/FoodTag");

const foodSchema = Schema({
  _id: Schema.Types.ObjectId,
  name: String,
  price: Number,
  desc: String,
  status: Number,
  imgUrl: String,
  sizes: [
    {
      // _sizeId: String,
      name: String,
      qty: Number,
      unit: String
    }
  ],
  toppings: [
    {
      // _toppingId: String,
      name: String,
      price: Number
    }
  ],
  tags: [
    {
      type: Schema.Types.ObjectId,
      ref: "FoodTag"
    }
  ],
  createDate: { type: Date, default: Date.now() },
  updatedDate: { type: Date, default: Date.now() },
  category: { type: Schema.Types.ObjectId, ref: "FoodCat" }
});

module.exports = mongoose.model("Food", foodSchema);

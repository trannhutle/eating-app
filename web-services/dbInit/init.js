const mongoose = require("mongoose");
require("../appSetting");
const CONNECTION = `mongodb://${process.env.MONGO_DB_URL}/eating-app`;

// mongoose.Promise = global.Promise;

mongoose
  .connect(CONNECTION)
  .then(() => {
    console.log("Successfully connected to database");
  })
  .catch(error => {
    console.error("Error connecting to MongoDB database", error);
  });

module.exports = mongoose;

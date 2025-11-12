const mongoose = require("mongoose");
const connectDb = () => {
  mongoose
    .connect(
      ""
    )
    .then(() => {
      console.log("Connected to MongoDB");
    })
    .catch((err) => {
      console.error("Error connecting to MongoDB:", err.message);
      process.exit(1);
    });
};
module.exports = connectDb;

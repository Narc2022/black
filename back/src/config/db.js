const mongoose = require("mongoose");

module.exports = () => {
  return mongoose.connect(
    "mongodb+srv://user:kush123@cluster0.4xk9u.mongodb.net/blackcoffee?retryWrites=true&w=majority"
  );
  // return mongoose.connect(
  //   "mongodb+srv://kuldeep1:kuldeep1@cluster0.vv9fmep.mongodb.net/blackcoffer?retryWrites=true&w=majority"
  // );
};

const mongoose = require("mongoose");
//Schema of Mongoose
const userSchema = new mongoose.Schema(
    {
      firstName: {
        type: String,
        required: true,
      },
      lastName: {
        type: String,
      },
      email: {
        type: String,
        // required: true,
      },
      jobTitle: {
        type: String,
      },
      gender: {
        type: String,
      },
    },
    { timestamps: true }
  );

  const User = mongoose.model("user", userSchema); //model name is also collection name
module.exports = User;
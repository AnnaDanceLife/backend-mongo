const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    minlength: 2,
  },
  lastName: {
    type: String,
    required: true,
    minlength: 2,
  },
  email: {
    type: String,
    required: true,
    minlength: 5,
  },
  books: [
    {
      type: mongoose.Schema.ObjectId,
      ref: "book",
    },
  ],
});

module.exports = mongoose.model("user", userSchema);

const mongoose = require("mongoose");

const bookSchema = new mongoose.Schema({
  author: {
    type: String,
    required: true,
    minLength: 2,
  },
  title: {
    type: String,
    required: true,
    minLength: 2,
  },
  reliaze_date: {
    type: Number,
    required: true,
    minLength: 4,
  },
  users: [
    {
      type: mongoose.Schema.ObjectId,
      ref: "user",
    },
  ],
});

module.exports = mongoose.model("book", bookSchema);
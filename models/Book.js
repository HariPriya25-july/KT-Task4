const mongoose = require("mongoose");

const bookSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, "Book title is required"],
      trim: true,
    },
    author: {
      type: String,
      required: [true, "Author name is required"],
      trim: true,
    },
    genre: {
      type: String,
      enum: ["Fiction", "Non-Fiction", "Science", "Programming", "History"],
      default: "Fiction",
    },
    publishedYear: {
      type: Number,
      min: [1000, "Year must be after 1000"],
      max: [new Date().getFullYear(), "Year cannot be in the future"],
    },
    available: {
      type: Boolean,
      default: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Book", bookSchema);
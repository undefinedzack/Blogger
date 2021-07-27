const mongoose = require("mongoose");

const blogSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, "First Name is required."],
    trim: true,
  },
  date: { type: String },
  description: { type: String, trim: true, maxLength: 200 },
  text: { type: String },
});

module.exports = mongoose.model("Blog", blogSchema);

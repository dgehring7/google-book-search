const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const gBookSchema = new Schema({
  title: { type: String, required: true },
  author: { type: String, required: true },
  description: String,
  image: String,
  link: String
});

const GBook = mongoose.model("Gbook", gBookSchema);

module.exports = GBook;
const mongoose = require("mongoose");
const { Schema } = mongoose;

const questionsSchema = new Schema({
  genre: String,
  question: String,
  answer: String,
  correct: Boolean
});

mongoose.model("questions", questionsSchema);
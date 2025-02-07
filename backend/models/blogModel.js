const mongoose = require("mongoose");

// Schemas define structure of document inside our db
// creating a new schema (mongodb is schema-less)
const Schema = mongoose.Schema;

const blogSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    author: {
      type: String,
      required: true,
    },
    body: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

// Models apply that schema to a particular model
module.exports = mongoose.model("Blog", blogSchema);

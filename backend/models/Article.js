const mongoose = require("mongoose");

const articleSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    originalContent: {
      type: String,
    },
    updatedContent: {
      type: String,
    },
    sourceUrl: {
      type: String,
    },
    references: [String],
  },
  { timestamps: true }
);

module.exports = mongoose.model("Article", articleSchema);

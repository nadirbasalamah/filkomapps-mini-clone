const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const DocumentSchema = new mongoose.Schema({
  student: {
    type: Schema.Types.ObjectId,
    ref: "student",
  },
  report: {
    type: String,
    required: true,
  },
  journal: {
    type: String,
    required: true,
  },
  transcript: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    default: "",
  },
});

module.exports = Document = mongoose.model("document", DocumentSchema);

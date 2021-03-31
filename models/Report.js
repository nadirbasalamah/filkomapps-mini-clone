const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ReportSchema = new mongoose.Schema({
  student: {
    type: Schema.Types.ObjectId,
    ref: "student",
  },
  lecturer: {
    type: Schema.Types.ObjectId,
    ref: "lecturer",
  },
  title: {
    type: String,
    required: true,
  },
  abstract: {
    type: String,
    required: true,
  },
  background: {
    type: String,
    required: true,
  },
  research_question: {
    type: String,
    required: true,
    unique: true,
  },
  file: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    default: "",
  },
});

module.exports = Report = mongoose.model("report", ReportSchema);

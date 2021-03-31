const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ProposalSchema = new mongoose.Schema({
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

module.exports = Proposal = mongoose.model("proposal", ProposalSchema);

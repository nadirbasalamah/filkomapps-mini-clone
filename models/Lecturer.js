const mongoose = require("mongoose");

const LecturerSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  id_number: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
});

module.exports = Lecturer = mongoose.model("lecturer", LecturerSchema);

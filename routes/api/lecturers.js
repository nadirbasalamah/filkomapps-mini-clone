const express = require("express");
// const { check } = require("express-validator");
const router = express.Router();

// const LecturerController = require("../../controllers/lecturers");

// @router  PUT api/lecturers/verify/proposal/{id}
// @param   proposal id
// @desc    Verify the proposal
// @access  Private
router.put("/verify/proposal", () => {
  return "verify proposal";
});

// @router  GET api/lecturers/proposal
// @desc    Get proposal's data
// @access  Private
router.get("/proposal", () => {
  return "proposal's data for lecturer";
});

// @router  PUT api/lecturers/verify/report/{id}
// @param   report id
// @desc    Upload a new report
// @access  Private
router.put("/verify/report", () => {
  return "verify report";
});

// @router  GET api/lecturers/report
// @desc    Get report's data
// @access  Private
router.get("/report", () => {
  return "report's data for lecturer";
});

// @router  PUT api/lecturers/status/{id}
// @param   student id
// @desc    Change the status of assignment's progress
// @access  Private
router.put("/status", () => {
  return "update the status";
});

module.exports = router;

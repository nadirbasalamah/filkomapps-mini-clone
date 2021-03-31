const express = require("express");
const { check } = require("express-validator");
const router = express.Router();
const auth = require("../../middleware/auth");

const StudentController = require("../../controllers/students");

// @router  POST api/students/proposal
// @desc    Upload a new proposal
// @access  Private
router.post(
  "/proposal",
  [
    auth,
    check("title", "title is required").not().isEmpty(),
    check("background", "background is required").not().isEmpty(),
    check("research_question", "research question is required").not().isEmpty(),
  ],
  StudentController.UploadProposal
);

// @router  GET api/students/proposal
// @desc    Get proposal's data
// @access  Private
router.get("/proposal", () => {
  return "proposal's data";
});

// @router  GET api/students/report
// @desc    Get report's data
// @access  Private
router.get("/report", () => {
  return "report's data";
});

// @router  POST api/students/report
// @desc    Upload a new report
// @access  Private
router.post("/report", () => {
  return "Upload report";
});

// @router  POST api/students/registration
// @desc    Upload some documents for final assignment registration
// @access  Private
router.post("/registration", () => {
  return "Registration for final part";
});

module.exports = router;

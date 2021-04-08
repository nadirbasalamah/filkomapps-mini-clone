const express = require("express");
// const { check } = require("express-validator");
const router = express.Router();
const auth = require("../../middleware/auth");

const LecturerController = require("../../controllers/lecturers");

// @router GET api/lecturers/
// @desc Get lecturer's data
// @access Private

router.get("/", auth, LecturerController.GetLecturer);

// @router  PUT api/lecturers/verify/proposal/{id}
// @param   proposal id
// @desc    Verify the proposal
// @access  Private
router.put("/verify/proposal/:id", auth, LecturerController.VerifyProposal);

// @router  GET api/lecturers/proposal
// @desc    Get proposal's data
// @access  Private
router.get("/proposal", auth, LecturerController.GetProposal);

// @router  PUT api/lecturers/verify/report/{id}
// @param   report id
// @desc    Verify the report
// @access  Private
router.put("/verify/report/:id", auth, LecturerController.VerifyReport);

// @router  GET api/lecturers/report
// @desc    Get report's data
// @access  Private
router.get("/report", auth, LecturerController.GetReport);

// @router  PUT api/lecturers/status/{id}
// @param   student id
// @desc    Change the status of assignment's progress
// @access  Private
router.put("/status/:id", auth, LecturerController.ChangeStatus);

// @router  PUT api/lecturers/document/{id}
// @param   document id
// @desc    Verify the document for final assignment preparation
// @access  Private
router.put("/document/:id", auth, LecturerController.VerifyDocument);

// @router  GET api/lecturers/document/{id}
// @param   student id
// @desc    Get student's document data
// @access  Private
router.get("/document/:id", auth, LecturerController.GetDocument);

module.exports = router;

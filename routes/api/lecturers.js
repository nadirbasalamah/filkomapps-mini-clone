const express = require("express");
// const { check } = require("express-validator");
const router = express.Router();
const auth = require("../../middleware/auth");

const LecturerController = require("../../controllers/lecturers");

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
// @desc    Upload a new report
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

module.exports = router;

const express = require("express");
const { check } = require("express-validator");
const router = express.Router();
const auth = require("../../middleware/auth");
const uploadUtil = require("../../utils/upload");

const StudentController = require("../../controllers/students");

// @router GET api/students/
// @desc Get student's data
// @access Private

router.get("/", auth, StudentController.GetStudent);

// @router  POST api/students/proposal
// @desc    Upload a new proposal
// @access  Private
router.post(
  "/proposal",
  [
    auth,
    uploadUtil.getSingleUploadMiddleware(),
    check("title", "title is required").not().isEmpty(),
    check("background", "background is required").not().isEmpty(),
    check("research_question", "research question is required").not().isEmpty(),
  ],
  StudentController.UploadProposal
);

// @router  GET api/students/proposal
// @desc    Get proposal's data
// @access  Private
router.get("/proposal", auth, StudentController.GetProposal);

// @router  POST api/students/report
// @desc    Upload a new report
// @access  Private
router.post(
  "/report",
  [
    auth,
    uploadUtil.getSingleUploadMiddleware(),
    check("title", "title is required").not().isEmpty(),
    check("abstract", "abstract is required").not().isEmpty(),
    check("background", "background is required").not().isEmpty(),
    check("research_question", "research question is required").not().isEmpty(),
  ],
  StudentController.UploadReport
);

// @router  GET api/students/report
// @desc    Get report's data
// @access  Private
router.get("/report", auth, StudentController.GetReport);

// @router  POST api/students/registration
// @desc    Upload some documents for final assignment registration
// @access  Private
router.post(
  "/registration",
  auth,
  uploadUtil.getUploadMiddleware(),
  StudentController.Registration
);

module.exports = router;

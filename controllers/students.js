const { validationResult } = require("express-validator");

const Response = require("../utils/util");
const StudentService = require("../services/students");

exports.GetStudent = async (req, res) => {
  try {
    const obj = {
      response: res,
      studentId: req.user.id,
    };
    const student = await StudentService.GetStudent(obj);
    res.json(student);
  } catch (error) {
    console.error(error.message);
    const serverErr = { response: res, code: 500, error: "server error" };
    Response.serverErrResponse(serverErr);
  }
};

exports.UploadProposal = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    const errResponse = {
      response: res,
      code: 400,
      error: { errors: errors.array() },
    };
    return Response.errorResponse(errResponse);
  }

  if (!req.file) {
    const errResponse = {
      response: res,
      code: 422,
      error: "Proposal file is required",
    };
    return Response.errorResponse(errResponse);
  }

  const { title, background, research_question, lecturerId } = req.body;
  const fileUrl = req.file.path.replace("\\", "/");

  try {
    const obj = {
      studentId: req.user.id,
      lecturerId,
      title,
      background,
      research_question,
      file: fileUrl,
      response: res,
    };
    await StudentService.UploadProposal(obj);
  } catch (error) {
    console.error(error.message);
    const serverErr = { response: res, code: 500, error: "server error" };
    Response.serverErrResponse(serverErr);
  }
};

exports.GetProposal = async (req, res) => {
  try {
    const obj = {
      response: res,
      studentId: req.user.id,
    };
    const proposal = await StudentService.GetProposal(obj);
    res.json(proposal);
  } catch (error) {
    console.error(error.message);
    const serverErr = { response: res, code: 500, error: "server error" };
    Response.serverErrResponse(serverErr);
  }
};

exports.UploadReport = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    const errResponse = {
      response: res,
      code: 400,
      error: { errors: errors.array() },
    };
    return Response.errorResponse(errResponse);
  }

  if (!req.file) {
    const errResponse = {
      response: res,
      code: 422,
      error: "Report file is required",
    };
    return Response.errorResponse(errResponse);
  }

  const {
    title,
    abstract,
    background,
    research_question,
    lecturerId,
  } = req.body;
  const fileUrl = req.file.path.replace("\\", "/");

  try {
    const obj = {
      studentId: req.user.id,
      lecturerId,
      title,
      abstract,
      background,
      research_question,
      file: fileUrl,
      response: res,
    };
    await StudentService.UploadReport(obj);
  } catch (error) {
    console.error(error.message);
    const serverErr = { response: res, code: 500, error: "server error" };
    Response.serverErrResponse(serverErr);
  }
};

exports.GetReport = async (req, res) => {
  try {
    const obj = {
      response: res,
      studentId: req.user.id,
    };
    const report = await StudentService.GetReport(obj);
    res.json(report);
  } catch (error) {
    console.error(error.message);
    const serverErr = { response: res, code: 500, error: "server error" };
    Response.serverErrResponse(serverErr);
  }
};

exports.Registration = async (req, res) => {
  try {
    const isValid =
      req.files.report[0] && req.files.journal[0] && req.files.transcript[0];

    if (!isValid) {
      const errResponse = {
        response: res,
        code: 422,
        error: "Files is required",
      };
      return Response.errorResponse(errResponse);
    }

    const reportUrl = req.files.report[0].path.replace("\\", "/");
    const journalUrl = req.files.journal[0].path.replace("\\", "/");
    const transcriptUrl = req.files.transcript[0].path.replace("\\", "/");

    const obj = {
      studentId: req.user.id,
      report: reportUrl,
      journal: journalUrl,
      transcript: transcriptUrl,
      response: res,
    };
    await StudentService.Registration(obj);
  } catch (error) {
    console.error(error.message);
    const serverErr = { response: res, code: 500, error: "server error" };
    Response.serverErrResponse(serverErr);
  }
};

const { validationResult } = require("express-validator");

const Response = require("../utils/util");
const StudentService = require("../services/students");

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

const Response = require("../utils/util");
const LecturerService = require("../services/lecturers");

const mongoose = require("mongoose");

exports.GetLecturer = async (req, res) => {
  try {
    const obj = {
      lecturerId: req.user.id,
      response: res,
    };
    const lecturer = await LecturerService.GetLecturer(obj);
    res.json(lecturer);
  } catch (error) {
    console.error(error.message);
    const serverErr = { response: res, code: 500, error: "server error" };
    Response.serverErrResponse(serverErr);
  }
};

exports.VerifyProposal = async (req, res) => {
  const proposalId = req.params.id;
  const { status } = req.body;

  const isValid = mongoose.Types.ObjectId.isValid(proposalId);

  if (!isValid) {
    const errResponse = {
      response: res,
      code: 400,
      error: { errors: [{ msg: "ID is not valid" }] },
    };
    return Response.errorResponse(errResponse);
  }

  try {
    const obj = {
      proposalId,
      status,
      response: res,
    };
    await LecturerService.VerifyProposal(obj);
  } catch (error) {
    console.error(error.message);
    const serverErr = { response: res, code: 500, error: "server error" };
    Response.serverErrResponse(serverErr);
  }
};

exports.GetProposal = async (req, res) => {
  try {
    const obj = {
      lecturerId: req.user.id,
      response: res,
    };
    const proposal = await LecturerService.GetProposal(obj);
    res.json(proposal);
  } catch (error) {
    console.error(error.message);
    const serverErr = { response: res, code: 500, error: "server error" };
    Response.serverErrResponse(serverErr);
  }
};

exports.VerifyReport = async (req, res) => {
  const reportId = req.params.id;
  const { status } = req.body;

  const isValid = mongoose.Types.ObjectId.isValid(reportId);

  if (!isValid) {
    const errResponse = {
      response: res,
      code: 400,
      error: { errors: [{ msg: "ID is not valid" }] },
    };
    return Response.errorResponse(errResponse);
  }

  try {
    const obj = {
      reportId,
      status,
      response: res,
    };
    await LecturerService.VerifyReport(obj);
  } catch (error) {
    console.error(error.message);
    const serverErr = { response: res, code: 500, error: "server error" };
    Response.serverErrResponse(serverErr);
  }
};

exports.GetReport = async (req, res) => {
  try {
    const obj = {
      lecturerId: req.user.id,
      response: res,
    };
    const report = await LecturerService.GetReport(obj);
    res.json(report);
  } catch (error) {
    console.error(error.message);
    const serverErr = { response: res, code: 500, error: "server error" };
    Response.serverErrResponse(serverErr);
  }
};

exports.ChangeStatus = async (req, res) => {
  const studentId = req.params.id;
  const { status } = req.body;

  const isValid = mongoose.Types.ObjectId.isValid(studentId);

  if (!isValid) {
    const errResponse = {
      response: res,
      code: 400,
      error: { errors: [{ msg: "ID is not valid" }] },
    };
    return Response.errorResponse(errResponse);
  }

  try {
    const obj = {
      studentId,
      status,
      response: res,
    };
    await LecturerService.ChangeStatus(obj);
  } catch (error) {
    console.error(error.message);
    const serverErr = { response: res, code: 500, error: "server error" };
    Response.serverErrResponse(serverErr);
  }
};

exports.VerifyDocument = async (req, res) => {
  const documentId = req.params.id;
  const { status } = req.body;

  const isValid = mongoose.Types.ObjectId.isValid(documentId);

  if (!isValid) {
    const errResponse = {
      response: res,
      code: 400,
      error: { errors: [{ msg: "ID is not valid" }] },
    };
    return Response.errorResponse(errResponse);
  }

  try {
    const obj = {
      documentId,
      status,
      response: res,
    };
    await LecturerService.VerifyDocument(obj);
  } catch (error) {
    console.error(error.message);
    const serverErr = { response: res, code: 500, error: "server error" };
    Response.serverErrResponse(serverErr);
  }
};

exports.GetDocument = async (req, res) => {
  try {
    const obj = {
      studentId: req.params.id,
      response: res,
    };
    const document = await LecturerService.GetDocument(obj);
    res.json(document);
  } catch (error) {
    console.error(error.message);
    const serverErr = { response: res, code: 500, error: "server error" };
    Response.serverErrResponse(serverErr);
  }
};

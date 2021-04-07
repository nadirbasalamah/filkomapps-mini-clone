const Proposal = require("../models/Proposal");
const Report = require("../models/Report");
const Student = require("../models/Student");

const Util = require("../utils/util");

exports.VerifyProposal = async (obj) => {
  try {
    const proposal = await Proposal.findById(obj.proposalId);
    if (!proposal) {
      const errResponse = {
        response: obj.response,
        code: 404,
        error: { errors: [{ msg: "Proposal not found" }] },
      };
      return Util.errorResponse(errResponse);
    }
    proposal.status = obj.status;
    await proposal.save();
    obj.response.json(proposal);
  } catch (error) {
    console.log(error);
  }
};

exports.GetProposal = async (obj) => {
  try {
    const proposal = await Proposal.find({ lecturer: obj.lecturerId });
    if (!proposal) {
      const errResponse = {
        response: obj.response,
        code: 404,
        error: { errors: [{ msg: "Proposal not found" }] },
      };
      return Util.errorResponse(errResponse);
    }
    return proposal;
  } catch (error) {
    console.log(error);
  }
};

exports.VerifyReport = async (obj) => {
  try {
    const report = await Report.findById(obj.reportId);
    if (!report) {
      const errResponse = {
        response: obj.response,
        code: 404,
        error: { errors: [{ msg: "Report not found" }] },
      };
      return Util.errorResponse(errResponse);
    }
    report.status = obj.status;
    await report.save();
    obj.response.json(report);
  } catch (error) {
    console.log(error);
  }
};

exports.GetReport = async (obj) => {
  try {
    const report = await Report.find({ lecturer: obj.lecturerId });
    if (!report) {
      const errResponse = {
        response: obj.response,
        code: 404,
        error: { errors: [{ msg: "Report not found" }] },
      };
      return Util.errorResponse(errResponse);
    }
    return report;
  } catch (error) {
    console.log(error);
  }
};

exports.ChangeStatus = async (obj) => {
  try {
    const student = await Student.findById(obj.studentId);
    if (!student) {
      const errResponse = {
        response: obj.response,
        code: 404,
        error: { errors: [{ msg: "Student not found" }] },
      };
      return Util.errorResponse(errResponse);
    }
    student.status = obj.status;
    await student.save();
    obj.response.json(student);
  } catch (error) {
    console.log(error);
  }
};

const Proposal = require("../models/Proposal");
const Report = require("../models/Report");
const Document = require("../models/Document");
const Student = require("../models/Student");
const Util = require("../utils/util");

exports.GetStudent = async (obj) => {
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
    return student;
  } catch (error) {
    console.log(error);
  }
};

exports.UploadProposal = async (obj) => {
  try {
    const proposal = await getProposal(obj.studentId);
    if (proposal) {
      Util.deleteFile(proposal.file);

      proposal.title = obj.title;
      proposal.background = obj.background;
      proposal.research_question = obj.research_question;
      proposal.file = obj.file;
      proposal.status = "";

      await proposal.save();
      obj.response.json(proposal);
    }
    const newProposal = new Proposal({
      student: obj.studentId,
      lecturer: obj.lecturerId,
      title: obj.title,
      background: obj.background,
      research_question: obj.research_question,
      file: obj.file,
    });
    const addedProposal = await newProposal.save();
    obj.response.json(addedProposal);
  } catch (error) {
    console.log(error);
  }
};

exports.GetProposal = async (obj) => {
  try {
    const proposal = await getProposal(obj.studentId);
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

exports.UploadReport = async (obj) => {
  try {
    const report = await getReport(obj.studentId);
    if (report) {
      Util.deleteFile(report.file);

      report.title = obj.title;
      report.abstract = obj.abstract;
      report.background = obj.background;
      report.research_question = obj.research_question;
      report.file = obj.file;
      report.status = "";

      await report.save();
      obj.response.json(report);
    }
    const newReport = new Report({
      student: obj.studentId,
      lecturer: obj.lecturerId,
      title: obj.title,
      abstract: obj.abstract,
      background: obj.background,
      research_question: obj.research_question,
      file: obj.file,
    });
    const addedReport = await newReport.save();
    obj.response.json(addedReport);
  } catch (error) {
    console.log(error);
  }
};

exports.GetReport = async (obj) => {
  try {
    const report = await getReport(obj.studentId);
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

exports.Registration = async (obj) => {
  try {
    const document = await getDocument(obj.studentId);
    if (document) {
      const documents = [
        document.report,
        document.journal,
        document.transcript,
      ];
      for (let i = 0; i < documents.length; i++) {
        Util.deleteFile(documents[i]);
      }

      document.report = obj.report;
      document.journal = obj.journal;
      document.transcript = obj.transcript;
      document.status = "";

      await document.save();
      obj.response.json(document);
    } else {
      const newDocument = new Document({
        student: obj.studentId,
        report: obj.report,
        journal: obj.journal,
        transcript: obj.transcript,
      });
      const addedDocument = await newDocument.save();
      obj.response.json(addedDocument);
    }
  } catch (error) {
    console.log(error);
  }
};

const getProposal = async (studentId) => {
  try {
    const proposal = await Proposal.findOne({ student: studentId });
    if (!proposal) {
      return null;
    }
    return proposal;
  } catch (error) {
    console.log(error);
  }
};

const getReport = async (studentId) => {
  try {
    const report = await Report.findOne({ student: studentId });
    if (!report) {
      return null;
    }
    return report;
  } catch (error) {
    console.log(error);
  }
};

const getDocument = async (studentId) => {
  try {
    const document = await Document.findOne({ student: studentId });
    if (!document) {
      return null;
    }
    return document;
  } catch (error) {
    console.log(error);
  }
};

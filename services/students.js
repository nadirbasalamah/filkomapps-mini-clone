const Student = require("../models/Student");
const Proposal = require("../models/Proposal");
const Response = require("../utils/util");

exports.UploadProposal = async (obj) => {
  try {
    const proposal = new Proposal({
      student: obj.studentId,
      lecturer: obj.lecturerId,
      title: obj.title,
      background: obj.background,
      research_question: obj.research_question,
      file: obj.file,
    });
    const addedProposal = await proposal.save();
    obj.response.json(addedProposal);
  } catch (error) {
    console.log(error);
  }
};

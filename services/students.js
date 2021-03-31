const Student = require("../models/Student");
const Proposal = require("../models/Proposal");

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

exports.GetProposal = async (obj) => {
  try {
    const proposal = Proposal.findOne({ student: obj.studentId });
    if (!proposal) {
      const errResponse = {
        response: obj.response,
        code: 404,
        error: { errors: [{ msg: "Proposal not found" }] },
      };
      return Response.errorResponse(errResponse);
    }
    return proposal;
  } catch (error) {
    console.log(error);
  }
};

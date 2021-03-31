const multer = require("multer");
const { v4: uuidv4 } = require("uuid");

exports.errorResponse = (obj) => {
  return obj.response.status(obj.code).json(obj.error);
};

exports.serverErrResponse = (obj) => {
  obj.response.status(obj.code).send(obj.error);
};

exports.createFileStorage = (folderName) => {
  return multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, folderName);
    },
    filename: (req, file, cb) => {
      cb(null, uuidv4() + file.originalname);
    },
  });
};

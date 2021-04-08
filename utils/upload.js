const multer = require("multer");
const Util = require("./util");

const fileFilter = (req, file, cb) => {
  if (file.mimetype === "application/pdf") {
    cb(null, true);
  } else {
    cb(null, false);
  }
};

exports.getUploadMiddleware = () => {
  const documentStorage = Util.createFileStorage("documents");

  return multer({
    storage: documentStorage,
    fileFilter: fileFilter,
  }).fields([
    {
      name: "report",
      maxCount: 1,
    },
    {
      name: "journal",
      maxCount: 1,
    },
    {
      name: "transcript",
      maxCount: 1,
    },
  ]);
};

exports.getSingleUploadMiddleware = () => {
  const fileStorage = Util.createFileStorage("files");

  return multer({
    storage: fileStorage,
    fileFilter: fileFilter,
  }).single("file");
};

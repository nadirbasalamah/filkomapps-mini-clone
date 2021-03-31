const express = require("express");
const path = require("path");
const connectDB = require("./config/db");
const multer = require("multer");
const { v4: uuidv4 } = require("uuid");

const app = express();

const fileStorage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "files");
  },
  filename: (req, file, cb) => {
    cb(null, uuidv4() + file.originalname);
  },
});

// const fileFilter = (req, file, cb) => {
//   if (file.mimetype === "document/pdf") {
//     cb(null, true);
//   } else {
//     cb(null, false);
//   }
// };

connectDB();

app.use(express.json({ extended: false }));
app.use(express.urlencoded({ extended: false }));

app.use(
  multer({
    storage: fileStorage,
    // fileFilter: fileFilter,
  }).single("file")
);
app.use("/files", express.static(path.join(__dirname, "files")));

app.use("/api/users", require("./routes/api/users"));
app.use("/api/students", require("./routes/api/students"));
app.use("/api/lecturers", require("./routes/api/lecturers"));

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
  console.log(`Server started on port: ${PORT}`);
});

const express = require("express");
const path = require("path");

const connectDB = require("./config/db");

const app = express();

connectDB();

app.use(express.json({ extended: false }));
app.use(express.urlencoded({ extended: false }));

app.use("/files", express.static(path.join(__dirname, "files")));
app.use("/documents", express.static(path.join(__dirname, "documents")));

app.use("/api/users", require("./routes/api/users"));
app.use("/api/students", require("./routes/api/students"));
app.use("/api/lecturers", require("./routes/api/lecturers"));

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
  console.log(`Server started on port: ${PORT}`);
});

const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const config = require("config");

const Student = require("../models/Student");
const Lecturer = require("../models/Lecturer");
const Response = require("../utils/util");

exports.Register = async (obj) => {
  try {
    let student = await Student.findOne({ email: obj.email });
    let lecturer = await Lecturer.findOne({ email: obj.email });
    if (student || lecturer) {
      const errResponse = {
        response: obj.response,
        code: 400,
        error: { errors: [{ msg: "User already exists" }] },
      };
      return Response.errorResponse(errResponse);
    }

    if (obj.role === "student") {
      student = new Student({
        name: obj.name,
        id_number: obj.id_number,
        email: obj.email,
        password: obj.password,
      });

      const salt = await bcrypt.genSalt(10);
      student.password = await bcrypt.hash(obj.password, salt);
      await student.save();

      const payload = {
        user: {
          id: student.id,
        },
      };

      jwt.sign(
        payload,
        config.get("jwtSecret"),
        { expiresIn: 360000 },
        (err, token) => {
          if (err) throw err;
          obj.response.json({ token });
        }
      );
    } else if (obj.role === "lecturer") {
      lecturer = new Lecturer({
        name: obj.name,
        id_number: obj.id_number,
        email: obj.email,
        password: obj.password,
      });

      const salt = await bcrypt.genSalt(10);
      lecturer.password = await bcrypt.hash(obj.password, salt);
      await lecturer.save();

      const payload = {
        user: {
          id: lecturer.id,
        },
      };

      jwt.sign(
        payload,
        config.get("jwtSecret"),
        { expiresIn: 360000 },
        (err, token) => {
          if (err) throw err;
          obj.response.json({ token });
        }
      );
    } else {
      const errResponse = {
        response: obj.response,
        code: 400,
        error: { errors: [{ msg: "User already exists" }] },
      };
      return Response.errorResponse(errResponse);
    }
  } catch (error) {
    console.log(error);
  }
};

exports.LoginStudent = async (obj) => {
  try {
    let student = await Student.findOne({ email: obj.email });
    if (!student) {
      const errResponse = {
        response: obj.response,
        code: 400,
        error: { errors: [{ msg: "Invalid credentials" }] },
      };
      return Response.errorResponse(errResponse);
    }

    const isMatch = await bcrypt.compare(obj.password, student.password);

    if (!isMatch) {
      const errResponse = {
        response: obj.response,
        code: 400,
        error: { errors: [{ msg: "Invalid credentials" }] },
      };
      return Response.errorResponse(errResponse);
    }

    const payload = {
      user: {
        id: student.id,
      },
    };

    jwt.sign(
      payload,
      config.get("jwtSecret"),
      { expiresIn: 360000 },
      (err, token) => {
        if (err) throw err;
        obj.response.json({ token });
      }
    );
  } catch (error) {
    console.log(error);
  }
};

exports.LoginLecturer = async (obj) => {
  try {
    let lecturer = await Lecturer.findOne({ email: obj.email });
    if (!lecturer) {
      const errResponse = {
        response: obj.response,
        code: 400,
        error: { errors: [{ msg: "Invalid credentials" }] },
      };
      return Response.errorResponse(errResponse);
    }

    const isMatch = await bcrypt.compare(obj.password, lecturer.password);

    if (!isMatch) {
      const errResponse = {
        response: obj.response,
        code: 400,
        error: { errors: [{ msg: "Invalid credentials" }] },
      };
      return Response.errorResponse(errResponse);
    }

    const payload = {
      user: {
        id: lecturer.id,
      },
    };

    jwt.sign(
      payload,
      config.get("jwtSecret"),
      { expiresIn: 360000 },
      (err, token) => {
        if (err) throw err;
        obj.response.json({ token });
      }
    );
  } catch (error) {
    console.log(error);
  }
};

exports.ChangePassword = async (obj) => {
  try {
    if (obj.role === "student") {
      const student = await Student.findById(obj.userId);
      if (!student) {
        const errResponse = {
          response: obj.response,
          code: 404,
          error: { errors: [{ msg: "Student data not found" }] },
        };
        return Response.errorResponse(errResponse);
      }

      const salt = await bcrypt.genSalt(10);
      student.password = await bcrypt.hash(obj.password, salt);

      await student.save();
      obj.response.json(student);
    } else if (obj.role === "lecturer") {
      const lecturer = await Lecturer.findById(obj.userId);
      if (!lecturer) {
        const errResponse = {
          response: obj.response,
          code: 404,
          error: { errors: [{ msg: "Lecturer data not found" }] },
        };
        return Response.errorResponse(errResponse);
      }

      const salt = await bcrypt.genSalt(10);
      lecturer.password = await bcrypt.hash(obj.password, salt);

      await lecturer.save();
      obj.response.json(lecturer);
    }
  } catch (error) {
    console.log(error);
  }
};

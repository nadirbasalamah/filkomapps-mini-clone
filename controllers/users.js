const { validationResult } = require("express-validator");

const Response = require("../utils/util");
const UserService = require("../services/users");

exports.Register = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    const errResponse = {
      response: res,
      code: 400,
      error: { errors: errors.array() },
    };
    return Response.errorResponse(errResponse);
  }

  const { name, email, id_number, password, role } = req.body;

  try {
    const obj = {
      name,
      email,
      id_number,
      password,
      role,
      response: res,
    };
    await UserService.Register(obj);
  } catch (error) {
    console.error(error.message);
    const serverErr = { response: res, code: 500, error: "server error" };
    Response.serverErrResponse(serverErr);
  }
};

exports.Login = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    const errResponse = {
      response: res,
      code: 400,
      error: { errors: errors.array() },
    };
    return Response.errorResponse(errResponse);
  }

  const { email, password, role } = req.body;

  try {
    const request = {
      email: email,
      password: password,
      response: res,
    };
    if (role === "student") {
      await UserService.LoginStudent(request);
    } else if (role === "lecturer") {
      await UserService.LoginLecturer(request);
    } else {
      const errResponse = {
        response: res,
        code: 400,
        error: "Role not valid",
      };
      return Response.errorResponse(errResponse);
    }
  } catch (error) {
    console.error(error.message);
    const errResponse = {
      response: res,
      code: 500,
      error: "server error",
    };
    Response.serverErrResponse(errResponse);
  }
};

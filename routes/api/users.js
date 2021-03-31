const express = require("express");
const { check } = require("express-validator");
const router = express.Router();

const UserController = require("../../controllers/users");

// @router  POST api/users/signup
// @desc    Register a new user
// @access  Public
router.post(
  "/signup",
  [
    check("name", "name is required").not().isEmpty(),
    check("role", "role is required").not().isEmpty(),
    check("id_number", "id number is required").not().isEmpty(),
    check("email", "Please include a valid email").isEmail(),
    check(
      "password",
      "please enter a password with 6 or more characters"
    ).isLength({ min: 6 }),
  ],
  UserController.Register
);

// @router  POST api/users/login
// @desc    Login a user
// @access  Public
router.post(
  "/login",
  [
    check("email", "email is required").exists(),
    check("role", "role is required").exists(),
    check("password", "password is required").exists(),
  ],
  UserController.Login
);

module.exports = router;

const User = require("../models/userModel");

// login user
const loginUser = async (res, req) => {
  res.json({ mssg: "login user" });
};

// signup user
const signupUser = async (res, req) => {
  res.json({ mssg: "signup user" });
};

module.exports = { loginUser, signupUser };

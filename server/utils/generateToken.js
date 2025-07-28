// const jwt = require("jsonwebtoken");
// const generateToken = (userId) =>
// jwt.sign({ userId }, process.env.JWT_SECRET, { expiresIn: "7d" });
// module.exports = generateToken;

import jwt from "jsonwebtoken";

export const generateToken = (userId) => {
  return jwt.sign({ id: userId }, process.env.JWT_SECRET, {
    expiresIn: "7d",
  });
};
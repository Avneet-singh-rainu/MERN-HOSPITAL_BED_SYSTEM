require("dotenv").config();
const jwt = require("jsonwebtoken");

module.exports = function createToken(id) {
  return jwt.sign({ id }, process.env.SECRET_TOKEN, {
    expiresIn: 3 * 24 * 60 * 60,
  });
};

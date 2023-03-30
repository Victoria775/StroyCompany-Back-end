const jwt = require("jsonwebtoken");

const generateAccessToken = (userId, login) => {
  const payload = {
    userId,
    login,
  };

  return jwt.sign(payload, process.env.KEY_SECRET, { expiresIn: "24h" });
};

module.exports = {
  generateAccessToken,
};
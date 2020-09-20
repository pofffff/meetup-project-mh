require("dotenv").config();
const bcrypt = require("bcrypt"),
  jwt = require("jsonwebtoken"),
  auth = require("../middleware/auth"),
  requestUser = require("./modules/getUser");

exports.authMiddleware = auth;
exports.authenticate = async (req, res) => {
  const email = req.headers.email;
  const token = jwt.sign({ email }, `${process.env.SECRET}`, {
    expiresIn: "15m",
  });
  res.json({
    success: true,
    email: email,
    token: token
  });
};

exports.loginRequest = async (req, res) => {
  const email = req.headers.email;
  const password = req.headers.password;

  requestUser
    .getUser(email)
    .then((user) => {
      const samePwd = bcrypt.compare(password, user.password);
      if (!samePwd) {
        res.status(403);
      } else {
        const token = jwt.sign({ email }, `${process.env.SECRET}`, {
          expiresIn: "15m",
        });
        res.json({
          success: true,
          email: email,
          token,
        });
      }
    })
    .catch((err) => {
      console.log("Error authenticating user: ", err);
    });
};

exports.userRequest = async (req, res) => {
  await requestUser
    .getUser(req.decoded.email)
    .then((user) => {
      const email = user.email;
      const token = jwt.sign({ email }, `${process.env.SECRET}`, {
        expiresIn: "15m",
      });
      res.json({
        success: true,
        user: user,
        token: token,
      });
    })
    .catch((error) => {
      console.log(error);
      res.send(error);
    });
};

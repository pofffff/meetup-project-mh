require('dotenv').config();
const bcrypt = require('bcrypt'),
  jwt = require('jsonwebtoken'),
  auth = require('../middleware/auth'),
  getUser = require('./modules/getUser');

exports.authMiddleware = auth;
exports.authenticate = async (req, res) => {
  const user = req.decoded.user;
  const token = jwt.sign({ user }, `${process.env.SECRET}`, {
    expiresIn: '15m',
  });
  res.json({
    success: true,
    token: token,
  });
};

exports.loginRequest = async (req, res) => {
  const email = req.headers.email;
  const password = req.headers.password;

  await getUser
    .byEmail(email)
    .then(async (user) => {
      if (user) {
        const samePwd = await bcrypt.compare(password, user.password);
        if (!samePwd) {
          res.status(403);
        } else {
          const token = jwt.sign({ user }, `${process.env.SECRET}`, {
            expiresIn: '15m',
          });
          res.json({
            success: true,
            token: token,
            user: user,
          });
        }
      } else {
        res.status(403);
      }
    })
    .catch((err) => {
      res.send(err);
    });
};

exports.userRequest = async (req, res) => {
  await getUser
    .by_id(req.decoded.user._id)
    .then((user) => {
      if (!user) {
        res.status(403);
      }
      const token = jwt.sign({ user }, `${process.env.SECRET}`, {
        expiresIn: '15m',
      });
      res.json({
        success: true,
        user: user,
        token: token,
      });
    })
    .catch((err) => {
      console.log(err);
      res.send(err);
    });
};

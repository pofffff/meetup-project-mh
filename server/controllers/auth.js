const bcrypt = require('bcrypt'),
  jwt = require('jsonwebtoken'),
  randtoken = require('rand-token'),
  auth = require('../middleware/auth'),
  getUser = require('./modules/getUser');

exports.authMiddleware = auth;
exports.authenticate = (req, res) => {
  try {
    res.json({ success: true, user: req.user });
    // req.user is getting fetched from authMiddleware after token authentication
  } catch (error) {
    res.send({ message: 'Error in Fetching user: ' + error });
  }
};

const refreshTokens = {};
exports.authenticateUser = async (req, res) => {
  const email = req.headers.email;
  const password = req.headers.password;

  getUser
    .getUser(email)
    .then((user) => {
      const samePwd = bcrypt.compare(password, user.password);
      if (!samePwd) {
        res.status(403);
      } else {
        const refreshToken = randtoken.uid(256);
        refreshTokens[refreshToken] = email;
        jwt.sign({ user }, 'secretkey', (err, token) => {
          if (err) {
            res.send({ 'Error ': err });
          } else {
            res.json({
              success: true,
              token,
              refreshToken,
            });
          }
        });
      }
    })
    .catch((err) => {
      console.log('Error authenticating user: ', err);
    });
};

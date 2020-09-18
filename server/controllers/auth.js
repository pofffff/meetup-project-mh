const bcrypt = require('bcrypt'),
  jwt = require('jsonwebtoken'),
  randtoken = require('rand-token'),
  auth = require('../middleware/auth'),
  requestUser = require('./modules/getUser');

exports.authMiddleware = auth;
exports.authenticate = (req, res) => {
  console.log(req)
  try {
    res.json({ success: true, user: req.user });
    // req.user is getting fetched from authMiddleware after token authentication
  } catch (error) {
    res.send({ message: 'Error in Fetching user: ' + error });
  }
};

const refreshTokens = {};
exports.authenticateUser = async (req, res) => {
  console.log(" HERE 1")
  const email = req.headers.email;
  const password = req.headers.password;

  requestUser.getUser(email)
    .then((user) => {
      const samePwd = bcrypt.compare(password, user.password);
      if (!samePwd) {
        res.status(403);
      } else {
        jwt.sign({ email }, 'secretkey', (err, token) => {
          if (err) {
            res.send({ 'Error ': err });
          } else {
            res.json({
              success: true,
              email: email,
              token,
            });
          }
        });
      }
    })
    .catch((err) => {
      console.log('Error authenticating user: ', err);
    });
};

exports.requestUser = async (req, res) => {
  await requestUser.getUser(req.headers.email)
}

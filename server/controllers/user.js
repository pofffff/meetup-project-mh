const User = require('../models/user'),
  bcrypt = require('bcrypt'),
  jwt = require('jsonwebtoken'),
  randtoken = require('rand-token'),
  mongoose = require('mongoose'),
  auth = require('../middleware/auth'),
  db = mongoose.connection,
  userSchema = db.userSchema;

const getUser = async (email) => {
  const user = await mongoose
    .model('User', userSchema)
    .findOne({ email: email })
    .exec();
  console.log(user);
  if (user) return user;
  if (!user) return false;
};

const BCRYPT_SALT_ROUNDS = 12;

exports.registerUser = async (req, res) => {
  const name = req.headers.name,
    email = req.headers.email,
    password = req.headers.password,
    numberOfEvents = 0;

  const userExists = await getUser(email);
  if (userExists === false) {
    bcrypt
      .hash(password, BCRYPT_SALT_ROUNDS)
      .then((hashedPassword) => {
        const user = new User({
          name: name,
          email: email,
          password: hashedPassword,
          numberOfEvents: numberOfEvents,
        });
        return user;
      })
      .then((user) => {
        res.send({ success: true });
        user.save();
      })
      .catch((error) => {
        console.log('Error saving user:', error);
      });
  } else {
    res.send({ emailExists: true });
  }
};

exports.authMiddleware = auth;
exports.authUser = (req, res, err) => {
  try {
    res.json({ success: true, user: req.user });
    // req.user is getting fetched from authMiddleware after token authentication
  } catch (error) {
    res.send({ message: 'Error in Fetching user: ' + error });
  }
};

exports.authenticateUser = async (req, res) => {
  const email = req.headers.credentials.email;
  const password = req.headers.credentials.password;

  getUser(email)
    .then((user) => {
      const samePwd = bcrypt.compare(password, user.password);
      if (!samePwd) {
        res.status(403);
      } else {
        const refreshToken = randtoken.uid(256);
        refreshTokens[refreshToken] = username;
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

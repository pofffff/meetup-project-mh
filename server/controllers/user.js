const User = require('../models/user'),
  getUser = require('./modules/getUser'),
  bcrypt = require('bcrypt'),
  jwt = require('jsonwebtoken'),
  auth = require('../middleware/auth'),
  upload = require('../middleware/upload'),
  BCRYPT_SALT_ROUNDS = 12;

exports.authMiddleware = auth;
exports.uploadMiddleware = upload;

exports.registerUser = async (req, res) => {
  const name = req.headers.name,
    email = req.headers.email,
    password = req.headers.password;

  const userExists = await getUser.byEmail(email);
  if (userExists === false) {
    bcrypt
      .hash(password, BCRYPT_SALT_ROUNDS)
      .then((hashedPassword) => {
        const user = new User({
          name: name,
          email: email,
          password: hashedPassword,
        });
        return user;
      })
      .then((user) => {
        user.save();
        user = getUser.byEmail(user.email);
        const token = jwt.sign({ user }, `${process.env.SECRET}`, {
          expiresIn: '15m',
        });
        res.send({ success: true, token: token });
      })
      .catch((error) => {
        console.log('Error saving user:', error);
      });
  } else {
    res.send({ emailExists: true });
  }
};

exports.uploadImage = async (req, res) => {
  User.updateOne(
    { _id: req.decoded.user._id },
    { $set: { image: req.file.filename } },
    (err) => {
      if (err) console.log(err);
    }
  );

  res.send(req.file);
};

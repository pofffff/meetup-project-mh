const User = require('../models/user'),
  getUser = require('./modules/getUser'),
  validate = require('./modules/validation'),
  bcrypt = require('bcrypt'),
  jwt = require('jsonwebtoken'),
  auth = require('../middleware/auth'),
  upload = require('../middleware/upload'),
  BCRYPT_SALT_ROUNDS = 12;

exports.authMiddleware = auth;
exports.uploadMiddleware = upload;

exports.registerUser = async (req, res) => {
  const inputs = {
    name: req.headers.name,
    email: req.headers.email,
    password: req.headers.password,
  };

  const validation = await validate.registerUser(inputs);
  const userExists = await getUser.byEmail(inputs.email);

  if (userExists === false && validation === true) {
    bcrypt
      .hash(inputs.password, BCRYPT_SALT_ROUNDS)
      .then((hashedPassword) => {
        const user = new User({
          name: inputs.name,
          email: inputs.email,
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
      .catch((err) => {
        console.log('Error saving user:', err);
      });
  } else {
    res.send({ emailExists: true });
  }
};

exports.getOneUser = async (req, res, error) => {
  const user = await getUser.by_id(req.params.id);
  if (user) {
    res.send({ success: true, user: user });
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

const User = require('../models/user'),
  getUser = require('./modules/getUser'),
  bcrypt = require('bcrypt'),
  jwt = require('jsonwebtoken'),
  BCRYPT_SALT_ROUNDS = 12;

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

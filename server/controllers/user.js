const User = require('../models/user'),
  getUser = require('./modules/getUser'),
  bcrypt = require('bcrypt'),
  BCRYPT_SALT_ROUNDS = 12;

exports.registerUser = async (req, res) => {
  const name = req.headers.name,
    email = req.headers.email,
    password = req.headers.password,
    numberOfEvents = 0;

  const userExists = await getUser.getUser(email);
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

const express = require('express'),
  User = require('../models/user'),
  bodyParser = require('body-parser'),
  bcrypt = require('bcrypt'),
  mongoose = require('mongoose'),
  router = express.Router(),
  db = mongoose.connection,
  userSchema = db.userSchema;

router.use(bodyParser.json());
router.use(bodyParser.urlencoded({ extended: true }));

// Get all users
router.get('/', async (req, res) => {
  const message = { success: true, message: 'hej' };
  res.send(message);
});

const checkIfUserExists = async (email) => {
  const user = await mongoose
    .model('User', userSchema)
    .findOne({ email: email })
    .exec();

  if (user) return true;
  if (!user) return false;
};

const BCRYPT_SALT_ROUNDS = 12;

router.post('/register', async (req, res) => {
  const name = req.body.name,
    email = req.body.email,
    password = req.body.password,
    numberOfEvents = 0;

  const userExists = await checkIfUserExists(email);

  if (userExists === false) {
    bcrypt
      .hash(password, BCRYPT_SALT_ROUNDS)
      .then((hashedPwd) => {
        const user = new User({
          name: name,
          email: email,
          password: hashedPwd,
          numberOfEvents: numberOfEvents,
        });
        return user;
      })
      .then((user) => {
        res.send({ success: true });
        console.log('here');
        user.save();
      })
      .catch((error) => {
        console.log('Error saving user:', error);
      });
  }

  if (userExists === true) {
    res.send({ emailExists: true });
  }
});

module.exports = router;

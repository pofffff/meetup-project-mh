const express = require('express'),
  User = require('../models/user'),
  bodyParser = require('body-parser'),
  router = express.Router();

router.use(bodyParser.json());
router.use(bodyParser.urlencoded({ extended: true }));

// Get all users
router.get('/getData', async (req, res) => {
  const message = { success: true, message: 'hej' };
  res.send(message);
});

router.post('/user', async (req, res) => {
  console.log('here');
  const user = new User({
    name: 'hej',
    email: 'hejhej',
    password: 'pw',
    festivals: '1234567',
  });

  user.save();
  res.send(user);
});
module.exports = router;

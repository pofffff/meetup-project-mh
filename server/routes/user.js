const { Router } = require('express');
const router = new Router();

const userController = require('../controllers/user');

router
  .route('/')
  .post(userController.registerUser)
  .get(userController.authenticateUser, userController.authMiddleware);

module.exports = router;

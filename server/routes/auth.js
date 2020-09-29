const { Router } = require('express');
const router = new Router();

const authenticateController = require('../controllers/auth');
router.route('/loginRequest').post(authenticateController.loginRequest);

router
  .route('/userRequest')
  .get(
    authenticateController.authMiddleware,
    authenticateController.userRequest
  );

router
  .route('/authenticate')
  .get(
    authenticateController.authMiddleware,
    authenticateController.authenticate
  );

module.exports = router;

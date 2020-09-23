const { Router } = require('express'),
  router = new Router(),
  userController = require('../controllers/user'),
  upload = require('../middleware/upload');

router.route('/').post(userController.registerUser);

router
  .route('/image')
  .post(
    userController.authMiddleware,
    upload.single('profile-image'),
    userController.uploadImage
  );

module.exports = router;

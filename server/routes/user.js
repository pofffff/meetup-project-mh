const { Router } = require('express'),
  router = new Router(),
  userController = require('../controllers/user'),
  upload = require('../middleware/upload');

router.route('/register').post(userController.registerUser);
router.route('/getOne/:id').get(userController.getOneUser);

router
  .route('/image')
  .post(
    userController.authMiddleware,
    upload.single('profile-image'),
    userController.uploadImage
  );

module.exports = router;

const { Router } = require("express");
const router = new Router();

const authenticateController = require("../controllers/auth");
router.route("/").post(authenticateController.authenticateUser);

router
  .route("/userRequest")
  .get(
    authenticateController.authMiddleware,
    authenticateController.userRequest
  );

module.exports = router;

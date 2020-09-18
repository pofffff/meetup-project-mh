const { Router } = require("express");
const router = new Router();

const authenticateController = require("../controllers/auth");
router.route("/").post(authenticateController.authenticateUser);

router
  .route("/requestUser")
  .get(
    authenticateController.authMiddleware,
    authenticateController.requestUser
  );

module.exports = router;

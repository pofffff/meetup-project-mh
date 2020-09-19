const { Router } = require("express");
const router = new Router();

const eventController = require("../controllers/event");

router.route("/").post(eventController.authMiddleware, eventController.addEvent);



module.exports = router;

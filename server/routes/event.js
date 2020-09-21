const { Router } = require('express');
const router = new Router();

const eventController = require('../controllers/event');

router
  .route('/')
  .post(eventController.authMiddleware, eventController.addEvent);
router.route('/getAll').get(eventController.getAllEvents);

module.exports = router;

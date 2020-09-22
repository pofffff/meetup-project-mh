const { Router } = require('express');
const router = new Router();

const eventController = require('../controllers/event');

router
  .route('/add')
  .post(eventController.authMiddleware, eventController.addEvent);
router.route('/getAll').get(eventController.getAllEvents);
router.route('/getOne/:id').get(eventController.getEvent);
module.exports = router;

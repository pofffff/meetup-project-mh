const User = require('../models/user'),
  Event = require('../models/event'),
  auth = require('../middleware/auth'),
  getUser = require('./modules/getUser');

exports.authMiddleware = auth;
exports.addEvent = async (req, res) => {
  console.log(req.decoded);
  const user = await getUser.by_id(req.decoded.user._id);

  try {
    let event = req.body;
    event = new Event({
      name: event.name,
      city: event.city,
      adress: event.adress,
      date: event.date,
      time: event.time,
      description: event.description,
      image: event.image,
      added_by: user._id,
    });
    event.save();
    res.send({ success: true });
  } catch (error) {
    res.send({ success: false });
  }
};

exports.getAllEvents = async (req, res) => {
  const events = await Event.find().populate('registred');
  res.send(events);
};

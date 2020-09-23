const Event = require('../models/event'),
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
  const events = await Event.find().populate('registered');
  res.send(events);
};

exports.getEvent = async (req, res) => {
  const event = await Event.findOne({ _id: req.params.id }).populate(
    'comments.written_by'
  );
  if (event) {
    res.send(event);
  } else {
    res.send({ success: false });
  }
};

exports.addComment = async (req, res) => {
  const addEvent = await Event.findOneAndUpdate(
    { _id: req.body.event_id },
    {
      $push: {
        comments: {
          written_by: req.decoded.user._id,
          comment: req.body.comment,
        },
      },
    }
  );
  console.log(addEvent);
  if (addEvent) {
    res.send({ success: true, event_id: req.body.event_id });
  } else {
    res.send({ success: false });
  }
};

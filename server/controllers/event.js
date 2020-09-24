const Event = require('../models/event'),
  User = require('../models/user'),
  auth = require('../middleware/auth');

exports.authMiddleware = auth;
exports.addEvent = async (req, res, err) => {
  let event = req.body;
  event = new Event({
    name: event.name,
    city: event.city,
    adress: event.adress,
    date: event.date,
    time: event.time,
    description: event.description,
    image: event.image,
    added_by: req.decoded.user._id,
  });
  event.save();
  res.send({ success: true });
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
    res.send(error);
  }
};

exports.addComment = async (req, res, err) => {
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

  if (addEvent) {
    res.send({ success: true, event_id: req.body.event_id });
  } else {
    res.send(err);
  }
};

exports.addUserToEvent = async (req, res, err) => {
  const addUser = await Event.findOneAndUpdate(
    { _id: req.body.event_id },
    {
      $addToSet: {
        registered: req.decoded.user._id,
      },
    }
  );
  const updateUser = await User.findOneAndUpdate(
    { _id: req.decoded.user._id },
    {
      $addToSet: {
        attend_to: req.body.event_id,
      },
    }
  );

  if (addUser && updateUser) {
    res.send({ success: true, event_id: req.body.event_id });
  } else {
    res.send(err);
  }
};

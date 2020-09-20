const User = require("../models/user"),
  Event = require("../models/event"),
  auth = require("../middleware/auth");
const { getUser } = require("./modules/getUser");

exports.authMiddleware = auth;
exports.addEvent = async (req, res) => {
  console.log(req.body);
  const user = await getUser(req.decoded.email);

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

const User = require("../models/user"),
  Event = require("../models/event"),
  auth = require("../middleware/auth");

exports.authMiddleware = auth;
exports.addEvent = async (req, res) => {
    console.log("here")

};

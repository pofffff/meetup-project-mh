const mongoose = require('mongoose'),
  commentSchema = new mongoose.Schema({
    author: {
      type: mongoose.Types.Schema.ObjectId,
      ref: "User",
      required: true
    },
    event: {
      type: mongoose.Types.Schema.ObjectId,
      ref: "Event",
      required: true
    },
    comment: {
      type: String,
      required: true,
    },
    Timestamps: true,
  });

module.exports = mongoose.model('Comment', commentSchema);

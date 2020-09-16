const mongoose = require('mongoose'),
  Timestamps = require('mongoose-timestamp'),
  festivalSchema = new mongoose.Schema({
    author: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    date: {
      type: Date,
      default: Date.now,
    },
    Timestamps: true,
  });

module.exports = mongoose.model('Festival', festivalSchema);

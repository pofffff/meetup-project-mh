const mongoose = require('mongoose'),
  festivalSchema = new mongoose.Schema({
    author: {
      type: String,
      required: true,
    },
    festival: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    Timestamps: true,
  });

module.exports = mongoose.model('Festival', festivalSchema);

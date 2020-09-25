const mongoose = require('mongoose');
const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    ref: 'GridFs',
    required: false,
  },
  attend_to: {
    type: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'event',
      },
    ],
    default: [],
  },
  comments_written: {
    type: Number,
    required: false,
    default: 0,
  },
});

module.exports = mongoose.model('User', userSchema);

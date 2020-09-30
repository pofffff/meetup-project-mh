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
    default:
      'https://meetupprojectuploads.s3.eu-north-1.amazonaws.com/2020-09-30T13%3A31%3A57.137Z-default_img.png',
  },
  attend_to: {
    type: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Event',
      },
    ],
    default: [],
  },
  comments: {
    type: [
      {
        event: {
          type: mongoose.Schema.Types.ObjectId,
          ref: 'Event',
          required: true,
        },
        comment: { type: String, required: true },
      },
    ],
    default: [],
  },
});

module.exports = mongoose.model('User', userSchema);

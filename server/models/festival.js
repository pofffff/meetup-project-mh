const mongoose = require('mongoose');
const festivalSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  location: {
    type: String,
    required: true,
  },
  adress: {
    type: String,
    required: true,
  },
  ticketLink: {
    type: String,
    required: true,
  },
  date: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  registred: {
    type: Number,
  },
});

module.exports = mongoose.model('Festival', festivalSchema);

const mongoose = require('mongoose'),
  db = mongoose.connection,
  userSchema = db.userSchema;

module.exports.by_id = async (_id) => {
  const user = await mongoose
    .model('User', userSchema)
    .findOne({ _id: _id })
    .populate('attend_to')
    .exec();
  if (user) return user;
  if (!user) return false;
};

module.exports.byEmail = async (email) => {
  const user = await mongoose
    .model('User', userSchema)
    .findOne({ email: email })
    .exec();
  if (user) return user;
  if (!user) return false;
};

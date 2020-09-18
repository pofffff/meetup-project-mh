const mongoose = require('mongoose'),
  db = mongoose.connection,
  userSchema = db.userSchema;

module.exports.getUser = async (email) => {
  const user = await mongoose
    .model('User', userSchema)
    .findOne({ email: email })
    .exec();
  if (user) return user;
  if (!user) return false;
};

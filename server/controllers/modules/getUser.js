const mongoose = require('mongoose'),
  db = mongoose.connection,
  userSchema = db.userSchema;

module.exports.getUser = async (email) => {
  const user = await mongoose
    .model('User', userSchema)
    .findOne({ email: email })
    .exec();
  console.log(user);
  if (user) return user;
  if (!user) return false;
};

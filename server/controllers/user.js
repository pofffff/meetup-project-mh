const User = require("../models/user"),
  { getUser } = require("./modules/getUser"),
  bcrypt = require("bcrypt"),
  BCRYPT_SALT_ROUNDS = 12;

exports.registerUser = async (req, res) => {
  const name = req.headers.name,
    email = req.headers.email,
    password = req.headers.password;

  const userExists = await getUser(email);
  if (userExists === false) {
    bcrypt
      .hash(password, BCRYPT_SALT_ROUNDS)
      .then((hashedPassword) => {
        const user = new User({
          name: name,
          email: email,
          password: hashedPassword,
        });
        return user;
      })
      .then((user) => {
        user.save();
        res.send({ success: true });
      })
      .catch((error) => {
        console.log("Error saving user:", error);
      });
  } else {
    res.send({ emailExists: true });
  }
};

const jwt = require("jsonwebtoken");

module.exports = (req, res, next) => {
  console.log(" HERE 2");
  console.log(req.headers);
  const token = req.headers.authorization;
  if (!token) return res.status(401).json({ message: "Auth Error" });

  try {
    const decoded = jwt.verify(token, "secretkey");
    req.headers.email = decoded.email;
    next();
  } catch (error) {
    console.error(error);
    res.status(500).send({ message: "Invalid Token" });
  }
};

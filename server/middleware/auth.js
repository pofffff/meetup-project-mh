const jwt = require("jsonwebtoken");

module.exports = (req, res, next) => {
  console.log(req.headers)
  const token = req.headers.authorization
  
  if (!token) return res.status(401).json({ message: "No token" });

  jwt.verify(token, `${process.env.SECRET}`, (error, decoded) => {
    console.log(error);
    if (error) return res.status(403).send({ message: "Invalid Token" });
    req.decoded = decoded;
    console.log(req.decoded);
    next();
  });
};

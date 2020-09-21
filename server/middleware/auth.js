const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {
  const token = req.headers.authorization;
  if (!token) return res.status(401).json({ message: 'No token' });

  jwt.verify(token, `${process.env.SECRET}`, (error, decoded) => {
    if (error) return res.status(403).send({ message: 'Invalid Token' });
    req.decoded = decoded;
    next();
  });
};

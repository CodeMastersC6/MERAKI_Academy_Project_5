const jwt = require("jsonwebtoken");

const authentication = (req, res, next) => {
  try {
    if (!req.headers.authorization)
      res.status(403).json({ message: "forbidden" });

    const token = req.headers.authorization.split(" ").pop();
    
    const secret = process.env.SECRET || "Secury Secret"

    jwt.verify(token,secret , (err, result) => {
      if (err) {
        res.status(403).json({
          success: false,
          message: `The token is invalid or expired`,
        });
      } else {
        req.token = result;
        next();
      }
    });
  } catch (error) {
    res.status(403).json({ message: "forbidden" });
  }
};

module.exports = authentication;

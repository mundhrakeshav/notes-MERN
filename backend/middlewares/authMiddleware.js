const jwt = require("jsonwebtoken");
const User = require("../models/userModel");

const protect = async (req, res, next) => {
  let token;
  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    try {
      token = req.headers.authorization.split(" ")[1];
      const decode = jwt.verify(token, process.env.JWT_SECRET);
      req.user = await User.findById(decode.id).select("-password");
      console.log(req.user);
      next();
    } catch (error) {
      res.status(401);
      res.send({ ...error, msg: "invalid Token" });
    }
  } else {
    res.status(401);
    res.send({ msg: "invalid Token" });
  }
};

module.exports = protect;

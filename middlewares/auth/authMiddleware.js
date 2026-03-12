import { verifyToken } from "../../config/jwt";

const authMiddleware = (req, res, next) => {

  const authHeader = req.headers.authorization;

  if (!authHeader) {
    return res.status(401).json({
      message: "Authorization token required"
    });
  }

  const token = authHeader.split(" ")[1];

  verifyToken(token, (err, decoded) => {

    if (err) {
      return res.status(403).json({
        message: "Invalid Token"
      });
    }

    req.user = decoded;

    next();
  });

};

export default authMiddleware;
import logger from "../../utils/logger.js";

const activityLogger = (req, res, next) => {

  logger.info({
    user: req.user?.username,
    role: req.user?.role,
    method: req.method,
    route: req.originalUrl,
    ip: req.ip
  });

  next();

};

export default activityLogger;
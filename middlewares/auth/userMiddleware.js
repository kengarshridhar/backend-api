const validateUsername = (req, res, next) => {

  if (!req.user.username) {
    return res.status(400).json({
      message: "Username missing in token"
    });
  }

  next();

};

export default validateUsername;
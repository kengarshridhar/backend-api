import allowedMimeTypes from '../../utils/mimeTypes.js';

const fileValidator = (req, res, next) => {
  if (!req.file || !allowedMimeTypes.includes(req.file.mimetype)) {
    return res.status(400).json({ error: "Invalid file type" });
  }
  next();
};

export default fileValidator;
import express from "express";
import multer from "multer";

import uploadFile from "../controllers/fileController.js";
import fileValidator from "../middlewares/validators/fileValidator.js";

const upload = multer();
const router = express.Router();

router.post("/upload", upload.single("file"), fileValidator, uploadFile);

export default router;
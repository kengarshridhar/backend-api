import path from "path";
import fs from "fs";

const uploadFile = (req, res) => {
  const filePath = path.join(__dirname, "../uploads", req.file.originalname);
  fs.writeFileSync(filePath, req.file.buffer);
  res.json({ message: "File uploaded", path: filePath });
};

export default uploadFile
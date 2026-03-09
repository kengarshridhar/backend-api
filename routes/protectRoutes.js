import express from "express";
import { verifyToken } from "../middleware/auth/auth.js";
import { permit } from "../middleware/rolePermission.js";

const router = express.Router();

router.get("/admin",
  verifyToken,
  permit("admin", "super_admin"),
  (req, res) => {
    res.json({ message: "Admin dashboard" });
  }
);

router.get("/analytics",
  verifyToken,
  permit("analytics", "super_admin"),
  (req, res) => {
    res.json({ message: "Analytics data" });
  }
);

router.get("/editor",
  verifyToken,
  permit("editor", "seo_editor", "super_admin"),
  (req, res) => {
    res.json({ message: "Editor panel" });
  }
);

export default router;
import express from "express";
import { verifyAuthToken } from "../middlewares/auth/auth.js";
import { permit } from '../middlewares/auth/rolePermission.js';

const router = express.Router();

router.get("/admin",
  verifyAuthToken,
  permit("admin", "super_admin"),
  (req, res) => {
    res.json({ message: "Admin dashboard" });
  }
);

router.get("/analytics",
  verifyAuthToken,
  permit("analytics", "super_admin"),
  (req, res) => {
    res.json({ message: "Analytics data" });
  }
);

router.get("/editor",
  verifyAuthToken,
  permit("editor", "seo_editor", "super_admin"),
  (req, res) => {
    res.json({ message: "Editor panel" });
  }
);

export default router;
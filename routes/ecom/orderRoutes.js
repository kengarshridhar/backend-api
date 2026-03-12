import express from "express";
import { getAllProduct, getSingleProduct, addProduct, updateProduct, deleteProduct } from "../../controllers/ecom/productController";
import authMiddleware from "../../middlewares/auth/authMiddleware.js";
import authorizeRoles from "../../middlewares/auth/roleMiddleware.js";
import activityLogger from "../../middlewares/auth/activityLogger";

const router = express.Router();

router.get(
  "/",
  authMiddleware,
  authorizeRoles("admin", "sales"),
  activityLogger,
  getOrders
);

router.post(
  "/create",
  authMiddleware,
  authorizeRoles("sales", "admin", "subscriber"),
  activityLogger,
  createOrder
);
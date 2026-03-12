import express from "express";
import { getAllProduct, getSingleProduct, addProduct, updateProduct, deleteProduct } from "../../controllers/ecom/productController";
import authMiddleware from "../../middlewares/auth/authMiddleware.js";
import authorizeRoles from "../../middlewares/auth/roleMiddleware.js";
import activityLogger from "../../middlewares/auth/activityLogger";



const router = express.Router();

/* Create Product */
router.post("/add",
  authMiddleware,
  authorizeRoles("admin", "super-admin", "editor"),
  activityLogger,
  addProduct
);

/* Get All Products */
router.get("/", getAllProduct);

/* Get Single Product */
router.get("/:id", getSingleProduct);

/* Update Product */
router.put("/:id",
  authMiddleware,
  authorizeRoles("admin", "super-admin", "editor"),
  activityLogger,
  updateProduct());

/* Delete Product */
router.delete("/:id", 
  authMiddleware,
  authorizeRoles("admin", "super-admin", "editor"),
  activityLogger,
  deleteProduct);

export default router;
import express from "express";
import Product from "../../models/mongo/Product.js";

const router = express.Router();

/* Create Product */
router.post("/add", (req, res) => {

  Product.create(req.body)
    .then((product) => {
      res.status(201).json({
        message: "Product Created",
        data: product
      });
    })
    .catch((err) => {
      res.status(500).json({ message: err.message });
    });

});

/* Get All Products */
router.get("/", (req, res) => {

  Product.find()
    .populate("category", "name slug")
    .then((products) => {
      res.json(products);
    })
    .catch((err) => {
      res.status(500).json({ message: err.message });
    });

});

/* Get Single Product */
router.get("/:id", (req, res) => {

  Product.findById(req.params.id)
    .populate("category", "name slug")
    .then((product) => {

      if (!product) {
        return res.status(404).json({ message: "Product not found" });
      }

      res.json(product);

    })
    .catch((err) => {
      res.status(500).json({ message: err.message });
    });

});

/* Update Product */
router.put("/:id", (req, res) => {

  Product.findByIdAndUpdate(req.params.id, req.body, { new: true })
    .then((product) => {
      res.json({
        message: "Product Updated",
        data: product
      });
    })
    .catch((err) => {
      res.status(500).json({ message: err.message });
    });

});

/* Delete Product */
router.delete("/:id", (req, res) => {

  Product.findByIdAndDelete(req.params.id)
    .then(() => {
      res.json({ message: "Product Deleted" });
    })
    .catch((err) => {
      res.status(500).json({ message: err.message });
    });

});

export default router;
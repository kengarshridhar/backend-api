import express from "express";
import Category from "../../models/mongo/Category.js";

const router = express.Router();

/* Create Category */
router.post("/add", (req, res) => {

  Category.create(req.body)
    .then((category) => {
      res.status(201).json({
        message: "Category Created",
        data: category
      });
    })
    .catch((err) => {
      res.status(500).json({ message: err.message });
    });

});

/* Get All Categories */
router.get("/", (req, res) => {

  Category.find()
    .then((categories) => {
      res.json(categories);
    })
    .catch((err) => {
      res.status(500).json({ message: err.message });
    });

});

/* Get Single Category */
router.get("/:id", (req, res) => {

  Category.findById(req.params.id)
    .then((category) => {
      if (!category) {
        return res.status(404).json({ message: "Category not found" });
      }

      res.json(category);
    })
    .catch((err) => {
      res.status(500).json({ message: err.message });
    });

});

/* Update Category */
router.put("/:id", (req, res) => {

  Category.findByIdAndUpdate(req.params.id, req.body, { new: true })
    .then((category) => {
      res.json({
        message: "Category Updated",
        data: category
      });
    })
    .catch((err) => {
      res.status(500).json({ message: err.message });
    });

});

/* Delete Category */
router.delete("/:id", (req, res) => {

  Category.findByIdAndDelete(req.params.id)
    .then(() => {
      res.json({ message: "Category Deleted" });
    })
    .catch((err) => {
      res.status(500).json({ message: err.message });
    });

});

export default router;